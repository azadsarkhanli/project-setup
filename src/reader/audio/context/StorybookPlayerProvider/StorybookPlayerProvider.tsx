import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';

import { useSleepTimer } from '../../../../features/player/useSleepTimer';
import { publicationFragment } from '../../../../utils/mocks/book';
import {
  PlaybackState,
  PlayerContext,
  PlayerContextValue,
} from '../PlayerContext';

export const StorybookPlayerProvider: FC<Partial<PlayerContextValue>> = ({
  children,
  ...props
}) => {
  const [playbackState, setPlaybackState] = useState<PlaybackState>(
    PlaybackState.Ready,
  );
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const {
    startTimer,
    cancelTimer,
    activeConfig: activeTimer,
  } = useSleepTimer();
  const value: PlayerContextValue = {
    publication: {
      ...publicationFragment,
      __typename: 'AudiobookPublication',
      streamingUri:
        'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_5MB_MP3.mp3',
    },
    playbackState,
    onLoadTrack: action('onLoadTrack'),
    onPlay: () => setPlaybackState(PlaybackState.Playing),
    onPlayPublication: async () => setPlaybackState(PlaybackState.Playing),
    onPause: () => setPlaybackState(PlaybackState.Paused),
    onJumpTo: action('onJumpTo'),
    bookmarks: [],
    addBookmark: action('addBookmark'),
    removeBookmark: action('removeBookmark'),
    goToLocatorAndPlay: action('goToLocator'),
    getPlaybackSpeed: async () => playbackSpeed,
    onPlaybackSpeedChange: (rate: number) => setPlaybackSpeed(rate),
    startTimer,
    cancelTimer,
    activeTimer,
    ...props,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
