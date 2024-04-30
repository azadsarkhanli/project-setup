import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  readerAutoNightMode,
  setReaderAutoNightMode,
} from '../reducer/readerSettings';

export const useReaderAutoNightMode = () => {
  const autoNightMode = useSelector(readerAutoNightMode);
  const dispatch = useDispatch();

  const setAutoNightMode = useCallback(
    (newAutoNightMode: boolean) => {
      dispatch(setReaderAutoNightMode({ autoNightMode: newAutoNightMode }));
    },
    [dispatch],
  );

  return {
    autoNightMode,
    setAutoNightMode,
  };
};
