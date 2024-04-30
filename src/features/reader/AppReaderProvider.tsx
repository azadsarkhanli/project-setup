import { LoadEvent } from '@gyldendaldigital/react-native-readium';
import React, { FC, useCallback, useEffect, useMemo } from 'react';

import { track } from '../../common/events';
import {
  ReaderContext,
  ReaderContextValue,
} from '../../reader/epub/context/ReaderContext';
import { useReadiumState } from '../../reader/epub/context/ReaderContext/useReadiumState';
import { useLogOpen } from '../catalog/hooks/useLogOpen';

import { useBookBookmarks } from './hooks/useBookBookmarks';
import { useBookLocators } from './hooks/useBookLocators';
import { useFontSettings } from './hooks/useFontSettings';
import { useReaderAutoNightMode } from './hooks/useReaderAutoNightMode';
import { useReaderCallbacks } from './hooks/useReaderCallbacks';
import { useReaderColorTheme } from './hooks/useReaderColorTheme';

type Props = Pick<ReaderContextValue, 'path' | 'publication'>;

export const AppReaderProvider: FC<Props> = ({
  publication,
  path,
  children,
}) => {
  const { id } = publication;
  const { autoNightMode, setAutoNightMode } = useReaderAutoNightMode();
  const { colorTheme, setColorTheme } = useReaderColorTheme();
  const { currentLocator, furthestLocator, progress, onLocationChange } =
    useBookLocators(id);
  const { addBookmark, removeBookmark, bookmarks } = useBookBookmarks(
    id,
    'reader',
  );
  const { onClose, onError } = useReaderCallbacks();
  const { readerRef, manifest, positions, goToLocator, onLoad } =
    useReadiumState();
  const {
    fontFamily,
    fontSize,
    lineHeight,
    setFontFamily,
    setFontSize,
    setLineHeight,
  } = useFontSettings();
  const logOpen = useLogOpen();

  const handleLoad = useCallback(
    (event: LoadEvent) => {
      onLoad(event);
      logOpen(id);
    },
    [id, logOpen, onLoad],
  );

  useEffect(() => {
    track([
      'reader_content_loaded',
      {
        book_id: id,
        book_author: publication.authorsFormatted,
        book_title: publication.title,
        ebook_progress: currentLocator?.locations?.totalProgression || 0,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: ReaderContextValue = useMemo(
    () => ({
      id,
      publication,
      path,
      colorTheme,
      fontFamily,
      fontSize,
      lineHeight,
      setFontFamily,
      setFontSize,
      setLineHeight,
      setColorTheme,
      autoNightMode,
      setAutoNightMode,
      currentLocator,
      furthestLocator,
      progress,
      onLocationChange,
      addBookmark,
      removeBookmark,
      bookmarks,
      onClose,
      onError,
      readerRef,
      manifest,
      positions,
      goToLocator,
      onLoad: handleLoad,
    }),
    [
      id,
      publication,
      path,
      colorTheme,
      fontFamily,
      fontSize,
      lineHeight,
      setFontFamily,
      setFontSize,
      setLineHeight,
      setColorTheme,
      autoNightMode,
      setAutoNightMode,
      currentLocator,
      furthestLocator,
      progress,
      onLocationChange,
      addBookmark,
      removeBookmark,
      bookmarks,
      onClose,
      onError,
      readerRef,
      manifest,
      positions,
      goToLocator,
      handleLoad,
    ],
  );

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
};
