import { useEffect, useState } from 'react';

import { captureException } from '../../common/utils/logger';

import { setupPlayer } from './module/setupPlayer';

export const usePlayerSetup = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setupPlayer()
      .then(() => setIsReady(true))
      .catch(e => {
        if (e?.code === 'player_already_initialized') {
          setIsReady(true);
        } else {
          captureException(e);
        }
      });
  }, []);

  return isReady;
};
