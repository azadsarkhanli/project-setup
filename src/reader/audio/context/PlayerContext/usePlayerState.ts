import { useCallback, useState } from 'react';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';

export const usePlayerState = () => {
  const [playbackState, setPlaybackState] = useState<State>(State.None);

  const forceStateUpdate = useCallback(async () => {
    const state = await TrackPlayer.getState();
    setPlaybackState(state);
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], event => {
    // https://github.com/doublesymmetry/react-native-track-player/issues/1659
    // @ts-ignore
    if (event.type === Event.PlaybackState) {
      const state: State | undefined = event.state;
      if (state !== undefined) {
        setPlaybackState(state);
      }
      // https://github.com/doublesymmetry/react-native-track-player/issues/1476
      // If there are state changes in rapid succession, events can get swallowed
      // resulting in inconsistent state, re-checking after timeout to be sure
      setTimeout(() => forceStateUpdate(), 2000);
    }
  });

  return {
    playbackState,
    forceStateUpdate,
  };
};
