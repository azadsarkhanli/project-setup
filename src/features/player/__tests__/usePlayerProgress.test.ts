import { act, renderHook } from '@testing-library/react-hooks';
import * as TrackPlayer from 'react-native-track-player';

import { jumpTo } from '../module/player';
import { usePlayerProgress } from '../usePlayerProgress';

jest.useFakeTimers('modern');

const ProgressMockBase = {
  position: 0,
  buffered: 100,
  duration: 100,
};

jest.mock('../module/player', () => ({
  jumpTo: jest.fn(),
}));

jest.mock('react-native-track-player', () => ({
  State: { None: 1 },
  Event: { PlaybackState: 'playback-state' },
  useTrackPlayerEvents: jest.fn(),
  useProgress: jest.fn(),
}));

describe('usePlayerProgress', () => {
  it('should capture initial position form track player', () => {
    jest.spyOn(TrackPlayer, 'useProgress').mockImplementation(() => ({
      ...ProgressMockBase,
      position: 10,
    }));
    const { result } = renderHook(() => usePlayerProgress());
    expect(result.current.position).toBe(10);
  });

  it('should handle changing position in a quick succession', done => {
    jest.spyOn(TrackPlayer, 'useProgress').mockImplementation(() => ({
      ...ProgressMockBase,
      position: 10,
    }));
    const { result } = renderHook(() => usePlayerProgress());
    act(() => result.current.changePositionBy(10));
    act(() => result.current.changePositionBy(-5));
    act(() => {
      result.current.changePositionBy(10);
      jest.advanceTimersByTime(500);
    });

    expect(result.current.position).toBe(25);
    expect(jumpTo).toHaveBeenCalledTimes(1);
    done();
  });

  it('should handle shallow position change', () => {
    jest.clearAllMocks();
    jest.spyOn(TrackPlayer, 'useProgress').mockImplementation(() => ({
      ...ProgressMockBase,
      position: 15,
    }));
    const { result } = renderHook(() => usePlayerProgress());
    act(() => result.current.changePositionShallow(5));
    expect(result.current.position).toBe(5);
    expect(jumpTo).toHaveBeenCalledTimes(0);
    act(() => result.current.changePositionShallowEnd(10));
    expect(jumpTo).toHaveBeenCalledTimes(1);
    expect(jumpTo).toHaveBeenCalledWith(10);
  });

  it('should respect playback range when changing the position', () => {
    jest.spyOn(TrackPlayer, 'useProgress').mockImplementation(() => ({
      ...ProgressMockBase,
      position: 15,
      duration: 100,
    }));
    const { result } = renderHook(() => usePlayerProgress());
    act(() => result.current.changePositionBy(200));
    expect(result.current.position).toBe(100);
    act(() => result.current.changePositionBy(-200));
    expect(result.current.position).toBe(0);
  });
});
