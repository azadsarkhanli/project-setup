import { useContext } from 'react';

import { ReaderContext } from './ReaderContext';

export const useReaderContext = () => {
  return useContext(ReaderContext);
};
