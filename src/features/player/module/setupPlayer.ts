import TrackPlayer, { Capability } from 'react-native-track-player';

export const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    backwardJumpInterval: 15,
    forwardJumpInterval: 15,
    progressUpdateEventInterval: 180,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.JumpBackward,
      Capability.JumpForward,
      Capability.SeekTo,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.JumpForward,
      Capability.SeekTo,
    ],
  });
};
