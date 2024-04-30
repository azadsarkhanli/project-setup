import { Locator } from '@gyldendaldigital/react-native-readium';
import { createContext } from 'react';
import { State, Track } from 'react-native-track-player';

import { AudiobookPublicationFragment } from '../../../../features/catalog/graphql/types';
import { Bookmark } from '../../../../features/catalog/types';

export type TimerConfig = {
  startTimestamp: number;
  duration: number;
};

export { State as PlaybackState } from 'react-native-track-player';

export type PlayerContextValue = {
  playbackState: State;
  publication: AudiobookPublicationFragment | null;

  onLoadTrack: (track: Track) => void;
  onPlay: () => void;
  onPlayPublication: (
    publication: AudiobookPublicationFragment,
  ) => Promise<void>;
  onPause: () => void;
  onJumpTo: (seconds: number) => void;

  bookmarks?: Bookmark[];
  addBookmark?: (locator: Locator) => void;
  removeBookmark?: (id: string) => void;

  goToLocatorAndPlay: (locator: Locator) => void;
  getPlaybackSpeed: () => Promise<number>;
  onPlaybackSpeedChange: (rate: number) => void;

  startTimer: (duration: number) => void;
  cancelTimer: () => void;
  activeTimer: TimerConfig | null;
};

export const PlayerContext = createContext<PlayerContextValue>(
  {} as PlayerContextValue,
);
