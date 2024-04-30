import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'searchQuery' as const;
type RootState = { searchQuery: SearchQueryState };

export type QueryChangedAction = { query: string };

export type SearchQueryState = {
  query: string;
};

export const initialState: SearchQueryState = {
  query: '',
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    queryChanged: (state, { payload }: PayloadAction<QueryChangedAction>) => {
      state.query = payload.query;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const query = (state: RootState) => state.searchQuery.query;

export const { queryChanged } = slice.actions;

export default slice.reducer;
