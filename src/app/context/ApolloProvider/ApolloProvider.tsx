import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
} from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';
import Config from 'react-native-config';

import { LoadingScreen } from '../../../common/components/LoadingScreen';
import { useAuthContext } from '../../../common/context/AuthContext';
import { captureException } from '../../../common/utils/logger';

import { getApolloClient } from './client';

export const ApolloProvider: FC = ({ children }) => {
  const { getAccessToken, userId } = useAuthContext();
  const [client, setClient] = useState<ApolloClient<unknown> | null>(null);

  useEffect(() => {
    const createClient = async () => {
      const newClient = await getApolloClient({
        uri: Config.API_URL,
        getAccessToken,
      });
      setClient(newClient);
    };
    createClient().catch(e => captureException(e));
    // Re-create apollo client when user Id changes to clear up cache
  }, [getAccessToken, userId]);

  if (!client) {
    return <LoadingScreen />;
  }

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};
