import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'searchPageContent' as const;
type RootState = { searchPageContent: SearchPageContentState };

export type PageContentType = 'open' | 'focus' | 'active' | 'result';

export type FocusChangedAction = { hasFocus: boolean };
export type ActiveChangedAction = { isActive: boolean };
export type KeyboardVisibleAction = { isVisible: boolean };

export type SearchPageContentState = {
  hasFocus: boolean;
  isActive: boolean;
  isKeyboardVisible: boolean;
};

export const initialState: SearchPageContentState = {
  hasFocus: false,
  isActive: false,
  isKeyboardVisible: false,
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    focus: (state, { payload }: PayloadAction<FocusChangedAction>) => {
      state.hasFocus = payload.hasFocus;
    },
    active: (state, { payload }: PayloadAction<ActiveChangedAction>) => {
      state.isActive = payload.isActive;
    },
    keyboard: (state, { payload }: PayloadAction<KeyboardVisibleAction>) => {
      state.isKeyboardVisible = payload.isVisible;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

const getPageContetType = (state: SearchPageContentState): PageContentType => {
  if (state.isActive) {
    return state.isKeyboardVisible ? 'active' : 'result';
  }

  return state.hasFocus ? 'focus' : 'open';
};

export const pageContentType = (state: RootState) =>
  getPageContetType(state.searchPageContent);

export const { focus, active, keyboard } = slice.actions;

export default slice.reducer;
