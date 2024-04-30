import { createSlice, Dictionary, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { Bookmark, Locator } from '../types';

const name = 'knownPublications' as const;
type RootState = { knownPublications: KnownPublicationsState };

export type KnownPublications = {
  currentLocator?: Locator;
  furthestLocator?: Locator;
  bookmarks?: Bookmark[];
  pastBookmarks?: Bookmark[];
};

export type KnownPublicationsState = Dictionary<KnownPublications>;

export const initialState: KnownPublicationsState = {};

export type SetCurrentLocationAction = {
  id: string;
  locator: Locator;
};
export type AddBookmarkAction = {
  id: string;
  bookmark: Bookmark;
};
export type RemoveBookmarkAction = {
  bookId: string;
  bookmarkId: string;
};

export type UndoBookmarksChangeAction = {
  bookId: string;
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentLocation: (
      state,
      { payload }: PayloadAction<SetCurrentLocationAction>,
    ) => {
      const { id, locator } = payload;

      const shouldUpdateFurthestLocator =
        !state[id]?.furthestLocator ||
        (locator.locations?.totalProgression || 0) >
          (state[id]?.furthestLocator?.locations?.totalProgression || 0);

      state[id] = {
        ...state[id],
        currentLocator: locator,
        ...(shouldUpdateFurthestLocator ? { furthestLocator: locator } : {}),
      };
    },
    addBookmark: (state, { payload }: PayloadAction<AddBookmarkAction>) => {
      const { id, bookmark } = payload;
      if (
        state[id]?.bookmarks?.find(
          item =>
            (item.locator.locations?.totalProgression || 0) ===
            (bookmark.locator.locations?.totalProgression || 0),
        )
      ) {
        return;
      }

      state[id] = {
        ...state[id],
        pastBookmarks: [...(state[id]?.bookmarks || [])],
        bookmarks: [...(state[id]?.bookmarks || []), bookmark].sort(
          (
            { locator: { locations: locA } },
            { locator: { locations: locB } },
          ) => (locA?.totalProgression || 0) - (locB?.totalProgression || 0),
        ),
      };
    },

    removeBookmark: (
      state,
      { payload }: PayloadAction<RemoveBookmarkAction>,
    ) => {
      const { bookId, bookmarkId } = payload;
      state[bookId] = {
        ...state[bookId],
        pastBookmarks: [...(state[bookId]?.bookmarks || [])],
        bookmarks: (state[bookId]?.bookmarks || []).filter(
          bookmark => bookmark.id !== bookmarkId,
        ),
      };
    },
    undoBookBookmarksChange: (
      state,
      { payload }: PayloadAction<UndoBookmarksChangeAction>,
    ) => {
      const { bookId } = payload;
      state[bookId] = {
        ...state[bookId],
        bookmarks: [...(state[bookId]?.pastBookmarks || [])],
        pastBookmarks: [...(state[bookId]?.bookmarks || [])],
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  setCurrentLocation,
  addBookmark,
  removeBookmark,
  undoBookBookmarksChange,
} = slice.actions;

const selectSlice = (state: RootState) => state.knownPublications;
const selectPublication = (state: RootState, id: string) =>
  state.knownPublications[id];

export const allKnownPublications = selectSlice;

export const publicationState = (id: string) => (state: RootState) =>
  selectPublication(state, id);

export const publicationCurrentLocator = (id: string) => (state: RootState) =>
  selectPublication(state, id)?.currentLocator;

export const publicationFurthestLocator = (id: string) => (state: RootState) =>
  selectPublication(state, id)?.furthestLocator;

export const publicationProgression = (id: string) => (state: RootState) =>
  selectPublication(state, id)?.currentLocator?.locations?.totalProgression ??
  0;

export const publicationFurthestProgression =
  (id: string) => (state: RootState) =>
    selectPublication(state, id)?.furthestLocator?.locations
      ?.totalProgression ?? 0;

export const publicationBookmarks = (id?: string) => (state: RootState) =>
  (id && selectPublication(state, id)?.bookmarks) || [];

export default slice.reducer;
