import React, { FC, useCallback, useEffect, useMemo } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch, useSelector } from 'react-redux';

import { track } from '../../../common/events';
import {
  authState,
  initialised,
  logoutStarted,
  logoutFinished,
  reset,
} from '../../../features/onboarding/reducer/auth';
import { pausePlayerIfPlaying } from '../../../features/player/module/player';
import { LoadingScreen } from '../../components/LoadingScreen';
import { clearDataAndRestartApp } from '../../utils/appRestart';
import { captureException } from '../../utils/logger';

import { AuthClient } from './AuthClient/AuthClient';
import { NetworkError, UnauthorizedError } from './AuthClient/errors';
import { AuthClientConfig } from './AuthClient/requests';
import { AuthContext } from './AuthContext';
import { TokenData } from './types';
import { useLogoutHandler } from './useLogoutHandler';

export type AuthProviderProps = {
  config: AuthClientConfig;
};

export const AuthProvider: FC<AuthProviderProps> = ({ config, children }) => {
  const client = useMemo(
    () => new AuthClient(config, EncryptedStorage),
    [config],
  );
  const logoutHandler = useLogoutHandler();
  const dispatch = useDispatch();
  const state = useSelector(authState);

  const logout = useCallback(async () => {
    dispatch(logoutStarted());
    track(['logout_started']);
    await pausePlayerIfPlaying(true);
    try {
      await client.logout();
    } catch (e) {
      captureException(e as Error);
    }
    try {
      await logoutHandler();
    } catch (e) {
      captureException(e as Error);
      await clearDataAndRestartApp();
      return;
    }
    dispatch(logoutFinished());
    track(['logout_finished']);
  }, [client, dispatch, logoutHandler]);

  useEffect(() => {
    dispatch(reset());
    client
      .getUserId()
      .then(userId => dispatch(initialised({ userId })))
      .catch(async e => {
        if (e instanceof UnauthorizedError) {
          await logout();
          return;
        }
        if (e instanceof NetworkError) {
          return;
        }
        captureException(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  const getAccessToken = useCallback(
    async (forceRefresh = false) => {
      let token = null;
      try {
        token = await client.getAccessToken(forceRefresh);
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          await logout();
          return null;
        }
        throw e;
      }
      return token;
    },
    [client, logout],
  );

  const setToken = useCallback(
    async (token: TokenData) => {
      await client.setTokenData(token);
      const userId = await client.getUserId();
      dispatch(initialised({ userId }));
    },
    [client, dispatch],
  );

  const value = useMemo(
    () => ({
      ...state,
      getAccessToken,
      logout,
      setToken,
    }),
    [getAccessToken, logout, setToken, state],
  );

  if (state.isLoading) {
    return <LoadingScreen />;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
