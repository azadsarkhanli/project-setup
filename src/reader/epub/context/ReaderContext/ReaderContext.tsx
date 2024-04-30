import {
  ErrorEvent,
  LoadEvent,
  LocationChangeEvent,
  Locator,
  ReadiumEpubReaderHandle,
  UserSettings,
} from '@gyldendaldigital/react-native-readium';
import { Manifest } from '@gyldendaldigital/react-native-readium/lib/typescript/types/publication';
import { createContext, MutableRefObject } from 'react';

import { Bookmark } from '../../../../features/catalog/types';
import { ReaderColorTheme, Publication } from '../../types';

export type ReaderContextValue = {
  // inputs

  id: string;
  publication: Publication;
  path: string;

  // internal

  readerRef?: MutableRefObject<ReadiumEpubReaderHandle | null>;
  manifest?: Manifest | null;
  positions?: Locator[] | null;
  goToLocator: (locator: Locator) => void;
  onLoad: (event: LoadEvent) => void;

  // reader experience

  fontFamily: UserSettings['fontFamily'];
  setFontFamily: (fontFamily: UserSettings['fontFamily']) => void;

  fontSize: number;
  setFontSize: (fontSize: number) => void;

  lineHeight: number;
  setLineHeight: (lineHeight: number) => void;

  colorTheme: ReaderColorTheme;
  setColorTheme: (colorTheme: ReaderColorTheme) => void;

  autoNightMode: boolean;
  setAutoNightMode: (mode: boolean) => void;

  // publication data connected to a back-end

  currentLocator?: Locator;
  furthestLocator?: Locator;
  progress: number;
  onLocationChange?: (event: LocationChangeEvent) => void;

  bookmarks?: Bookmark[];
  addBookmark: (locator: Locator) => void;
  removeBookmark: (id: string) => void;

  // external callbacks

  onError: (error: ErrorEvent) => void;
  onAboutPublication?: () => void;
  onClose: () => void;
};

export const ReaderContext = createContext<ReaderContextValue>(
  {} as ReaderContextValue,
);
