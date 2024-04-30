import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import TrackPlayer, { PitchAlgorithm, State } from 'react-native-track-player';
import { useSelector, useStore } from 'react-redux';

import { track } from '../../common/events';
import {
  PlayerContext,
  PlayerContextValue,
} from '../../reader/audio/context/PlayerContext';
import { usePlayerState } from '../../reader/audio/context/PlayerContext/usePlayerState';
import { locatorToPosition } from '../../reader/common/utils';
import { AudiobookPublicationFragment } from '../catalog/graphql/types';
import { useLogOpen } from '../catalog/hooks/useLogOpen';
import { ebookFile } from '../catalog/reducer/files';
import { publicationCurrentLocator } from '../catalog/reducer/knownPublications';
import { Locator } from '../catalog/types';
import { useBookBookmarks } from '../reader/hooks/useBookBookmarks';

import {
  jumpTo,
  loadTrack,
  pause,
  play,
  getPlaybackSpeed,
  setPlaybackSpeed,
  resume,
} from './module/player';
import { useSleepTimer } from './useSleepTimer';

export const AppPlayerProvider: FC = ({ children }) => {
  const { playbackState: rawPlaybackState, forceStateUpdate } =
    usePlayerState();

  const [publication, setPublication] =
    useState<AudiobookPublicationFragment | null>(null);
  const {
    startTimer,
    cancelTimer,
    activeConfig: activeTimer,
  } = useSleepTimer();
  const [pendingPlay, setPendingPlay] = useState(false);
  const localFile = useSelector(ebookFile(publication?.id));

  const store = useStore();
  const logOpen = useLogOpen();

  const { bookmarks, addBookmark, removeBookmark } = useBookBookmarks(
    publication?.id,
    'player',
  );

  const onPlayPublication = useCallback(
    async (newPublication: AudiobookPublicationFragment) => {
      if (publication !== newPublication) {
        setPublication(newPublication);
        const localFilePath = ebookFile(newPublication?.id)(store.getState());

        await loadTrack({
          url: localFilePath ?? newPublication.streamingUri,
          title: newPublication.title,
          artist: newPublication.authorsFormatted,
          pitchAlgorithm: PitchAlgorithm.Voice,
          publicationId: newPublication.id,
        });
        const locator = publicationCurrentLocator(newPublication.id)(
          store.getState(),
        );
        if (locator) {
          await TrackPlayer.seekTo(locatorToPosition(locator));
        }
        setPendingPlay(true);
        logOpen(newPublication.id);
        track([
          'player_content_loaded',
          {
            book_id: newPublication.id,
            book_author: newPublication.authorsFormatted,
            book_title: newPublication.title,
            audiobook_progress: locator?.locations?.totalProgression ?? 0,
          },
        ]);
      }
    },
    [logOpen, publication, store],
  );

  useEffect(() => {
    const switchToLocalFile = async () => {
      if (publication && localFile) {
        const currentTrackIdx = await TrackPlayer.getCurrentTrack();
        if (currentTrackIdx === undefined || currentTrackIdx === null) {
          return;
        }
        const currentTrack = await TrackPlayer.getTrack(currentTrackIdx);
        if (currentTrack && currentTrack?.url !== localFile) {
          const currentPosition = await TrackPlayer.getPosition();
          const state = await TrackPlayer.getState();
          await loadTrack({
            url: localFile,
            title: publication.title,
            artist: publication.authorsFormatted,
            pitchAlgorithm: PitchAlgorithm.Voice,
            publicationId: publication.id,
          });
          await TrackPlayer.seekTo(currentPosition);
          if (state === State.Playing) {
            setPendingPlay(true);
          }
        }
      }
    };
    switchToLocalFile();
  }, [localFile, publication, store]);

  // Shenanigans because of a bug: https://github.com/doublesymmetry/react-native-track-player/issues/582
  // When play is executed right after load track:
  // 1. state change event to playing is not triggered (thus forceStateUpdate)
  // 2. state change event with ready is trigged after playing started (thus useEffect listening to ready state)
  useEffect(() => {
    const initPlay = async () => {
      setPendingPlay(false);
    };

    if (rawPlaybackState !== State.Connecting && pendingPlay) {
      initPlay();
    }
  }, [rawPlaybackState, pendingPlay, forceStateUpdate]);

  // To avoid flickering before updating to playing state
  const playbackState = pendingPlay ? State.Connecting : rawPlaybackState;

  const goToLocatorAndPlay = useCallback(
    (locator: Locator) => {
      jumpTo(locatorToPosition(locator));
      if (playbackState === State.Paused) {
        resume();
      }
    },
    [playbackState],
  );

  const value: PlayerContextValue = useMemo(
    () => ({
      playbackState,

      publication,
      startTimer,
      cancelTimer,
      activeTimer,
      onLoadTrack: loadTrack,
      onPlay: play,
      onPlayPublication,
      onPause: pause,
      onJumpTo: (seconds: number) => {
        jumpTo(seconds);
      },
      onPlaybackSpeedChange: (rate: number) => {
        setPlaybackSpeed(rate);
        track(['narratorspeed_chosen', { rate }]);
      },
      getPlaybackSpeed,
      bookmarks,
      addBookmark,
      removeBookmark,
      goToLocatorAndPlay,
    }),
    [
      playbackState,

      publication,
      startTimer,
      cancelTimer,
      activeTimer,
      onPlayPublication,
      bookmarks,
      addBookmark,
      removeBookmark,
      goToLocatorAndPlay,
    ],
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
