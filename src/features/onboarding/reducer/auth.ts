import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'auth' as const;
type RootState = { auth: AuthState };

export type AuthState = {
  codeVerifiers: Record<string, string>;
  userId?: string | null;
  isLoading: boolean;
};

export const initialState: AuthState = {
  codeVerifiers: {},
  isLoading: true,
  userId: null,
};

export type InitialisedAction = {
  userId?: string | null;
};

export type SaveCodeVerifier = {
  id: string;
  codeVerifier: string;
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    initialised: (state, { payload }: PayloadAction<InitialisedAction>) => {
      state.userId = payload.userId;
      state.isLoading = false;
    },
    logoutStarted: state => {
      state.isLoading = true;
    },
    logoutFinished: state => {
      state.isLoading = false;
      state.userId = null;
    },
    saveCodeVerifier: (
      state,
      { payload: { id, codeVerifier } }: PayloadAction<SaveCodeVerifier>,
    ) => {
      state.codeVerifiers[id] = codeVerifier;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  initialised,
  logoutStarted,
  logoutFinished,
  reset,
  saveCodeVerifier,
} = slice.actions;

export const authState = (state: RootState) => state.auth;

export const selectCodeVerifier = (id: string) => (state: RootState) =>
  state.auth.codeVerifiers[id];

export default slice.reducer;
