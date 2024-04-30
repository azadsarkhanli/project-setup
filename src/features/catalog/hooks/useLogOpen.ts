import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { updateOpenTime } from '../reducer/bookshelf';

export const useLogOpen = () => {
  const dispatch = useDispatch();

  return useCallback(
    (id: string) => {
      dispatch(
        updateOpenTime({
          id,
          timestamp: Math.floor(Date.now() / 1000),
        }),
      );
    },
    [dispatch],
  );
};
