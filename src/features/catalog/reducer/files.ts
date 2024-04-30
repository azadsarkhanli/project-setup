import { createSlice, Dictionary, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'files' as const;
type RootState = { files: FilesState };

export interface FilesState {
  ebooks: Dictionary<string>;
}

export const initialState: FilesState = {
  ebooks: {},
};

export type SetFileAction = {
  id: string;
  path: string;
};

export type RemoveFileAction = {
  id: string;
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setEbookFile: (state, { payload }: PayloadAction<SetFileAction>) => {
      const { id, path } = payload;
      state.ebooks[id] = path;
    },
    removeEbookFile: (state, { payload }: PayloadAction<RemoveFileAction>) => {
      delete state.ebooks[payload.id];
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setEbookFile, removeEbookFile } = slice.actions;

export const allEbookFiles = (state: RootState) => state.files.ebooks;

export const hasEbookFile = (id?: string) => (state: RootState) => {
  if (!id) {
    return false;
  }
  return !!state.files.ebooks[id];
};

export const ebookFile = (id?: string) => (state: RootState) => {
  if (!id) {
    return null;
  }
  return state.files.ebooks[id];
};

export default slice.reducer;
