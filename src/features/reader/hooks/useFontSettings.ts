import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { track } from '../../../common/events';
import {
  readerFontFamily,
  readerFontSize,
  readerLineHeight,
  setReaderFontFamily,
  setReaderFontSize,
  setReaderLineHeight,
} from '../reducer/readerSettings';

export const useFontSettings = () => {
  const fontFamily = useSelector(readerFontFamily);
  const fontSize = useSelector(readerFontSize);
  const lineHeight = useSelector(readerLineHeight);
  const dispatch = useDispatch();

  const setFontFamily = useCallback(
    (newFontFamily: UserSettings['fontFamily']) => {
      dispatch(setReaderFontFamily({ fontFamily: newFontFamily }));
      track(['reader_font_edited', { font: newFontFamily ?? '' }]);
    },
    [dispatch],
  );
  const setFontSize = useCallback(
    (newFontSize: number) => {
      dispatch(setReaderFontSize({ fontSize: newFontSize }));
      track(['reader_font_size_edited', { fontSize: newFontSize }]);
    },
    [dispatch],
  );
  const setLineHeight = useCallback(
    (newLineHeight: number) => {
      dispatch(setReaderLineHeight({ lineHeight: newLineHeight }));
      track(['reader_line_height_edited', { lineHeight: newLineHeight }]);
    },
    [dispatch],
  );

  return {
    fontFamily,
    fontSize,
    lineHeight,
    setFontFamily,
    setFontSize,
    setLineHeight,
  };
};
