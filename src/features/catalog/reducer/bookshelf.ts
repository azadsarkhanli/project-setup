import {
  createSelector,
  createSlice,
  Dictionary,
  PayloadAction,
} from '@reduxjs/toolkit';
import { keyBy, sortBy } from 'lodash';
import { PURGE } from 'redux-persist';

import { PublicationFragment } from '../graphql';

const name = 'bookshelf' as const;
type RootState = { bookshelf: BookshelfState };

export type BookshelfState = {
  byId: Dictionary<PublicationFragment>;
  defaultOrder: string[];
  lastOpenTime: Dictionary<number>;
};

export const initialState: BookshelfState = {
  byId: {},
  defaultOrder: [],
  lastOpenTime: {},
};

export type SetBookshelfAction = {
  items: PublicationFragment[];
};

export type UpdateOpenTimeAction = {
  id: string;
  timestamp: number;
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setBookshelf: (state, { payload }: PayloadAction<SetBookshelfAction>) => {
      const { items } = payload;
      state.byId = keyBy(items, item => item.id);
      state.defaultOrder = items.map(item => item.id);
    },
    updateOpenTime: (
      state,
      { payload }: PayloadAction<UpdateOpenTimeAction>,
    ) => {
      const { id, timestamp } = payload;
      state.lastOpenTime[id] = timestamp;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setBookshelf, updateOpenTime } = slice.actions;

const selectSlice = (state: RootState) => state.bookshelf;

export const allBookshelf = createSelector(
  selectSlice,
  (state: BookshelfState) =>
    state.defaultOrder
      .map(id => state.byId[id])
      .filter(Boolean) as PublicationFragment[], // filter removes undefined
);

export const allBookshelfByOpenTime = createSelector(
  selectSlice,
  (state: BookshelfState): PublicationFragment[] => {
    const ids = sortBy(
      Object.entries(state.lastOpenTime),
      ([, timestamp]) => timestamp,
    )
      .reverse()
      .map(([id]) => id);
    return [
      ...ids.map(id => state.byId[id]),
      ...state.defaultOrder
        .filter(id => !ids.includes(id))
        .map(id => state.byId[id]),
    ].filter(Boolean) as PublicationFragment[]; // filter removes undefined
  },
);

export const bookshelfPublication = (id: string) => (state: RootState) =>
  selectSlice(state).byId[id];

export const bookshelfAudiobook = (id: string) => (state: RootState) => {
  const audiobook = selectSlice(state).byId[id];
  if (audiobook?.__typename === 'AudiobookPublication') {
    return audiobook;
  }
  return undefined;
};

export default slice.reducer;
