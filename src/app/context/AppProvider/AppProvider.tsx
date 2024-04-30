import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import { LoadingScreen } from '../../../common/components/LoadingScreen';
import {
  useRemoteConfigurationQuery,
  RemoteConfigurationQuery,
  RemoteConfigurationQueryVariables,
} from '../../../common/graphql';
import { GraphQlNode } from '../../../common/types';
import {
  clearDataAndRestartApp,
  restartApp,
} from '../../../common/utils/appRestart';
import { useExtractQuery } from '../../../common/utils/extractQuery';
import { useLogGraphQlError } from '../../../common/utils/useLogGraphQlError';
import { GraphQlErrorScreen } from '../../../screens/GraphQlErrorScreen';

export interface AppContextType {
  remoteConfig: Extract<
    RemoteConfigurationQuery['configuration'],
    GraphQlNode<'ClientConfiguration'>
  >;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: FC<{
  children: ReactNode;
}> = ({ children }): JSX.Element => {
  const { data, loading, error, refetch } = useExtractQuery<
    RemoteConfigurationQuery,
    RemoteConfigurationQueryVariables,
    AppContextType['remoteConfig']
  >(
    useRemoteConfigurationQuery(),
    'ClientConfiguration',
    payload => payload.configuration,
  );

  useLogGraphQlError('ClientConfiguration', error);

  const memoedValue = useMemo(() => {
    if (!data) {
      return null;
    }
    return {
      remoteConfig: data,
    };
  }, [data]);

  const onTryAgain = useCallback(() => {
    refetch();
  }, [refetch]);

  if (!memoedValue) {
    if (!loading && error) {
      return (
        <GraphQlErrorScreen
          error={error}
          onRestart={restartApp}
          onTryAgain={onTryAgain}
          onClearDataAndRestart={clearDataAndRestartApp}
        />
      );
    }
    return <LoadingScreen />;
  }
  return (
    <AppContext.Provider value={memoedValue}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
