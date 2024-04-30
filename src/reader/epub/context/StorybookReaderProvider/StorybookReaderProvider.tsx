import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React, { FC, useState } from 'react';

import { ReaderColorTheme } from '../../types';
import { ReaderContext, ReaderContextValue } from '../ReaderContext';
import { useReadiumState } from '../ReaderContext/useReadiumState';

export const StorybookReaderProvider: FC<Partial<ReaderContextValue>> = ({
  children,
  ...props
}) => {
  const { readerRef, manifest, positions, goToLocator, onLoad } =
    useReadiumState();
  const [colorTheme, setColorTheme] = useState<ReaderColorTheme>('default');
  const [autoNightMode, setAutoNightMode] = useState<boolean>(false);
  const [fontFamily, setFontFamily] =
    useState<UserSettings['fontFamily']>('Original');
  const [fontSize, setFontSize] = useState<number>(100);
  const [lineHeight, setLineHeight] = useState<number>(1.5);

  const value: ReaderContextValue = {
    id: 'mock-123',
    publication: {
      id: 'mock-123',
      title: 'Sjalusimannen og andre fortellinger',
      authors: [
        {
          id: 'mock-author-123',
          name: 'Jo Nesbø',
        },
      ],
      authorsFormatted: 'Jo Nesbø',
    },
    path: text('file path', ''),
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    colorTheme,
    setColorTheme,
    autoNightMode,
    setAutoNightMode,
    progress: 0.24,
    onLocationChange: action('onLocationChange'),
    addBookmark: action('addBookmark'),
    removeBookmark: action('removeBookmark'),
    bookmarks: [],
    onClose: action('onClose'),
    onError: action('onError'),
    readerRef,
    manifest,
    positions,
    goToLocator,
    onLoad,
    ...props,
  };

  return (
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>
  );
};
