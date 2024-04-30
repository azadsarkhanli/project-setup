import { useContext } from 'react';

import { PlayerContext } from './PlayerContext';

export const usePlayerContext = () => {
  return useContext(PlayerContext);
};
