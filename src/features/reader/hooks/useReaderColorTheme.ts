import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { track } from '../../../common/events';
import {
  readerColorTheme,
  setReaderColorTheme,
  ReaderState,
} from '../reducer/readerSettings';

export const useReaderColorTheme = () => {
  const colorTheme = useSelector(readerColorTheme);
  const dispatch = useDispatch();

  const setColorTheme = useCallback(
    (newColorTheme: ReaderState['colorTheme']) => {
      dispatch(setReaderColorTheme({ colorTheme: newColorTheme }));
      track(['reader_theme_edited', { theme: newColorTheme }]);
    },
    [dispatch],
  );

  return {
    colorTheme,
    setColorTheme,
  };
};
