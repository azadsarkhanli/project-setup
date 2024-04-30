import TrackPlayer, { State, Track } from 'react-native-track-player';
import uuid from 'react-native-uuid';

let sessionId: string;

const refreshSessionId = () => {
  sessionId = uuid.v4() as string;
};

refreshSessionId();

export const loadTrack = async (track: Track) => {
  await TrackPlayer.reset();
  refreshSessionId();
  return TrackPlayer.add([track]);
};

export const play = async () => {
  return TrackPlayer.play();
};

export const pause = () => {
  return TrackPlayer.pause();
};

export const pausePlayerIfPlaying = async (doReset?: boolean) => {
  const state = await TrackPlayer.getState();
  if ([(State.Buffering, State.Connecting, State.Playing)].includes(state)) {
    await TrackPlayer.pause();
    doReset && (await TrackPlayer.reset());
  }
};

export const resume = () => {
  return TrackPlayer.play();
};

export const jumpBy = async (seconds: number) => {
  const position = await TrackPlayer.getPosition();
  const duration = await TrackPlayer.getDuration();
  return TrackPlayer.seekTo(
    Math.max(0, Math.min(position + seconds, duration)),
  );
};

export const jumpTo = (time: number) => {
  return TrackPlayer.seekTo(time);
};

export const getPlaybackSpeed = () => {
  return TrackPlayer.getRate();
};

export const setPlaybackSpeed = (speed: number) => {
  return TrackPlayer.setRate(speed);
};

export const getSessionId = () => sessionId;
