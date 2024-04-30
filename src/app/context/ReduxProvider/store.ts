import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  createMigrate,
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';

import { reducer, State } from './reducer';

const enableLogger = __DEV__ && typeof jest === 'undefined';

const logger = createLogger({
  colors: {},
});

const migrations = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  2: (state: any) => {
    return {
      ...state,
      bookshelf: {
        ...state.bookshelf,
        lastOpenTime: {},
      },
    };
  },
};

const persistConfig: PersistConfig<State> = {
  key: 'root',
  storage: AsyncStorage,
  version: 2,
  blacklist: ['auth', 'searchPageContent', 'searchQuery'],
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(enableLogger ? [logger] : []),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
