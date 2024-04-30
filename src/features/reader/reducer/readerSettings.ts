import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { ReaderColorTheme } from '../../../reader/epub/types';

const name = 'readerSettings' as const;
type RootState = { readerSettings: ReaderState };

export interface ReaderState {
  autoNightMode: boolean;
  colorTheme: ReaderColorTheme;
  fontFamily: UserSettings['fontFamily'];
  fontSize: number;
  lineHeight: number;
}

export const initialState: ReaderState = {
  autoNightMode: false,
  colorTheme: 'default',
  fontFamily: 'Original',
  fontSize: 100,
  lineHeight: 1.5,
};

export type SetColorThemeAction = {
  colorTheme: ReaderState['colorTheme'];
};

export type SetAutoNightModeAction = {
  autoNightMode: ReaderState['autoNightMode'];
};

export type SetFontFamilyAction = {
  fontFamily: ReaderState['fontFamily'];
};

export type SetFontSizeAction = {
  fontSize: ReaderState['fontSize'];
};

export type SetLineHeightAction = {
  lineHeight: ReaderState['lineHeight'];
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setReaderColorTheme: (
      state,
      { payload }: PayloadAction<SetColorThemeAction>,
    ) => {
      const { colorTheme } = payload;
      state.colorTheme = colorTheme;
    },
    setReaderAutoNightMode: (
      state,
      { payload }: PayloadAction<SetAutoNightModeAction>,
    ) => {
      const { autoNightMode } = payload;
      state.autoNightMode = autoNightMode;
    },
    setReaderFontFamily: (
      state,
      { payload: { fontFamily } }: PayloadAction<SetFontFamilyAction>,
    ) => {
      state.fontFamily = fontFamily;
    },
    setReaderFontSize: (
      state,
      { payload: { fontSize } }: PayloadAction<SetFontSizeAction>,
    ) => {
      state.fontSize = fontSize;
    },
    setReaderLineHeight: (
      state,
      { payload: { lineHeight } }: PayloadAction<SetLineHeightAction>,
    ) => {
      state.lineHeight = lineHeight;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setReaderColorTheme,
  setReaderAutoNightMode,
  setReaderFontFamily,
  setReaderFontSize,
  setReaderLineHeight,
} = slice.actions;

export const readerColorTheme = (state: RootState) =>
  state.readerSettings.colorTheme;
export const readerAutoNightMode = (state: RootState) =>
  state.readerSettings.autoNightMode;
export const readerFontFamily = (state: RootState) =>
  state.readerSettings.fontFamily;
export const readerFontSize = (state: RootState) =>
  state.readerSettings.fontSize;
export const readerLineHeight = (state: RootState) =>
  state.readerSettings.lineHeight;

export default slice.reducer;
