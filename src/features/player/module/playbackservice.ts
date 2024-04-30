import TrackPlayer, { Event, State, Track } from 'react-native-track-player';

import { captureException } from '../../../common/utils/logger';

import { jumpBy } from './player';

type RemoteJumpEvent = {
  interval: number;
};

type RemoteSeekEvent = {
  position: number;
};

export type PlaybackServiceListener = {
  onPlaybackProgressUpdated: (
    track: Track,
    position: number,
    duration: number,
  ) => void;
};

let wasPausedByDuck = false;

export const createPlaybackService = (listener: PlaybackServiceListener) => {
  return async () => {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemotePause, () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.PlaybackQueueEnded, () => {
      TrackPlayer.reset();
    });

    TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, async event => {
      const track = await TrackPlayer.getTrack(event.track);
      if (track) {
        listener?.onPlaybackProgressUpdated(
          track,
          event.position,
          event.duration,
        );
      }
    });

    TrackPlayer.addEventListener(
      Event.RemoteJumpBackward,
      ({ interval }: RemoteJumpEvent) => {
        jumpBy(-interval);
      },
    );

    TrackPlayer.addEventListener(
      Event.RemoteJumpForward,
      ({ interval }: RemoteJumpEvent) => {
        jumpBy(interval);
      },
    );

    TrackPlayer.addEventListener(
      Event.RemoteSeek,
      ({ position }: RemoteSeekEvent) => {
        TrackPlayer.seekTo(position);
      },
    );

    TrackPlayer.addEventListener(Event.RemoteDuck, async e => {
      if (e.permanent === true) {
        TrackPlayer.pause();
      } else {
        if (e.paused === true) {
          const playerState = await TrackPlayer.getState();
          wasPausedByDuck = playerState !== State.Paused;
          await TrackPlayer.pause();
        } else {
          if (wasPausedByDuck === true) {
            TrackPlayer.play();
            wasPausedByDuck = false;
          }
        }
      }
    });

    TrackPlayer.addEventListener(Event.PlaybackError, event => {
      captureException(
        new Error(`PlaybackError ${event.code}: ${event.message}`),
      );
    });
  };
};
