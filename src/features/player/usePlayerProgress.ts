import { clamp, debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useProgress } from 'react-native-track-player';

import { jumpTo } from './module/player';

type PlayerScrollState = 'idle' | 'scrolling' | 'released';

export const usePlayerProgress = () => {
  const { position: playerPosition, buffered, duration } = useProgress();
  const [position, setPosition] = useState<number>(playerPosition);
  const [playerScrollState, setPlayerScrollState] =
    useState<PlayerScrollState>('idle');

  useEffect(() => {
    playerScrollState === 'idle' && setPosition(playerPosition);
    playerScrollState === 'released' && setPlayerScrollState('idle');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerPosition]);

  const updatePlayerPositionDebounced = useRef(
    debounce((newPosition: number) => {
      jumpTo(newPosition);
      setPlayerScrollState('released');
    }, 450),
  ).current;

  const changePositionBy = useCallback(
    (seconds: number) => {
      setPlayerScrollState('scrolling');
      const newPosition = clamp(position + seconds, 0, duration);
      setPosition(newPosition);
      updatePlayerPositionDebounced(newPosition);
    },
    [position, duration, updatePlayerPositionDebounced],
  );

  const changePositionShallow = useCallback((newPosition: number) => {
    setPlayerScrollState('scrolling');
    setPosition(newPosition);
  }, []);

  const changePositionShallowEnd = useCallback((newPosition: number) => {
    setPosition(newPosition);
    jumpTo(newPosition);
    setPlayerScrollState('released');
  }, []);

  return {
    position,
    buffered,
    duration,
    changePositionBy,
    changePositionShallow,
    changePositionShallowEnd,
  };
};
