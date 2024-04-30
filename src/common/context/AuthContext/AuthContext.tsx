import { createContext } from 'react';

import {
  AuthState,
  initialState,
} from '../../../features/onboarding/reducer/auth';

import { TokenData } from './types';

export type AuthContextValue = AuthState & {
  getAccessToken: (forceRefresh?: boolean) => Promise<string | null>;
  logout: () => Promise<void>;
  setToken: (token: TokenData) => Promise<void>;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <AuthProvider>.');
};

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  getAccessToken: stub,
  logout: stub,
  setToken: stub,
});
