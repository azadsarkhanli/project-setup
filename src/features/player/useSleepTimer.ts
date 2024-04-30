import { useCallback, useEffect, useState } from 'react';
import BackgroundTimer from 'react-native-background-timer';

import { track } from '../../common/events';
import { TimerConfig } from '../../reader/audio/context/PlayerContext';

import { pause } from './module/player';

const getNow = () => Math.floor(Date.now() / 1000);

export const useSleepTimer = () => {
  const [activeConfig, setActiveConfig] = useState<TimerConfig | null>(null);

  const startTimer = useCallback((duration: number) => {
    const startTimestamp = getNow();
    setActiveConfig({
      startTimestamp,
      duration,
    });
    BackgroundTimer.runBackgroundTimer(() => {
      const now = getNow();
      if (!startTimestamp) {
        // setTimeout because of https://github.com/ocetnik/react-native-background-timer/issues/310
        setTimeout(() => BackgroundTimer.stopBackgroundTimer(), 0);
        return;
      }
      if (startTimestamp + duration <= now) {
        setTimeout(() => BackgroundTimer.stopBackgroundTimer(), 0);
        pause();
        setActiveConfig(null);
        return;
      }
    }, 1000);
    track(['add_sleeptimer', { duration }]);
  }, []);

  const cancelTimer = useCallback(() => {
    BackgroundTimer.stopBackgroundTimer();
    setActiveConfig(null);
  }, []);

  useEffect(() => {
    return () => {
      setTimeout(() => BackgroundTimer.stopBackgroundTimer(), 0);
    };
  }, []);

  return {
    startTimer,
    cancelTimer,
    activeConfig,
  };
};
