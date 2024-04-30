import { CombinedState } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import bookshelf, {
  BookshelfState,
} from '../../../features/catalog/reducer/bookshelf';
import files, { FilesState } from '../../../features/catalog/reducer/files';
import knownPublications, {
  KnownPublicationsState,
} from '../../../features/catalog/reducer/knownPublications';
import auth, { AuthState } from '../../../features/onboarding/reducer/auth';
import newUser, {
  NewUserState,
} from '../../../features/onboarding/reducer/newUser';
import readerSettings, {
  ReaderState,
} from '../../../features/reader/reducer/readerSettings';
import searchPageContent, {
  SearchPageContentState,
} from '../../../features/search/reducer/searchPageContent';
import searchQuery, {
  SearchQueryState,
} from '../../../features/search/reducer/searchQuery';

export type State = CombinedState<{
  auth: AuthState;
  bookshelf: BookshelfState;
  files: FilesState;
  newUser: NewUserState;
  readerSettings: ReaderState;
  searchPageContent: SearchPageContentState;
  searchQuery: SearchQueryState;
  knownPublications: KnownPublicationsState;
}>;

export const reducer = combineReducers({
  auth,
  bookshelf,
  files,
  newUser,
  readerSettings,
  searchPageContent,
  searchQuery,
  knownPublications,
});
