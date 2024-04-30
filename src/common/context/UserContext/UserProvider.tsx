import crashlytics from '@react-native-firebase/crashlytics';
import React, { FC, useCallback, useEffect, useMemo } from 'react';

import { GraphQlErrorScreen } from '../../../screens/GraphQlErrorScreen';
import { LoadingScreen } from '../../components/LoadingScreen';
import { UserQuery, UserQueryVariables, useUserQuery } from '../../graphql';
import { GraphQlNode } from '../../types';
import { clearDataAndRestartApp, restartApp } from '../../utils/appRestart';
import { extractQuery } from '../../utils/extractQuery';
import { useLogGraphQlError } from '../../utils/useLogGraphQlError';
import { useAuthContext } from '../AuthContext';

import { UserContext } from './UserContext';

export const UserProvider: FC = ({ children }) => {
  const { userId } = useAuthContext();
  const query = useUserQuery({
    skip: !userId,
  });

  const { data, error } = useMemo(() => {
    if (!userId) {
      return {
        data: undefined,
        error: undefined,
      };
    }
    return extractQuery<
      UserQuery,
      UserQueryVariables,
      Extract<UserQuery['user'], GraphQlNode<'User'>>
    >(query, 'User', payload => payload.user);
  }, [query, userId]);

  useLogGraphQlError('User', error);

  useEffect(() => {
    crashlytics().setUserId(userId ?? '');
  }, [userId]);

  const value = useMemo(
    () => ({
      user: data,
    }),
    [data],
  );

  const onTryAgain = useCallback(() => {
    query.refetch();
  }, [query]);

  if (!data) {
    if (query.loading) {
      return <LoadingScreen />;
    }
    if (error) {
      return (
        <GraphQlErrorScreen
          error={error}
          onRestart={restartApp}
          onTryAgain={onTryAgain}
          onClearDataAndRestart={clearDataAndRestartApp}
        />
      );
    }
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
