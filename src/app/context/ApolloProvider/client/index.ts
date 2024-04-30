import {
  ApolloClient,
  InMemoryCache,
  from,
  HttpLink,
  PossibleTypesMap,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageWrapper, CachePersistor } from 'apollo3-cache-persist';

import { AuthLink } from './authLink';
import { errorLink } from './errorLink';

type GetApolloClientParams = {
  uri: string;
  getAccessToken: () => Promise<string | null>;
  possibleTypes?: PossibleTypesMap;
};

const possibleTypes = {
  Publication: ['EbookPublication', 'AudiobookPublication'],
  CmsScreenItem: ['BookshelfScreenItem', 'ScreenItemList', 'GenresScreenItem'],
};

const cache = new InMemoryCache({
  possibleTypes,
});

export const apolloPersistor = new CachePersistor({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
});

export const getApolloClient = async ({
  uri,
  getAccessToken,
}: GetApolloClientParams) => {
  const httpLink = new HttpLink({ uri });
  const link = from([errorLink, new AuthLink(getAccessToken), httpLink]);

  await apolloPersistor.restore();

  const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
      },
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'network-only',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  client.onClearStore(async () => {
    await apolloPersistor.purge();
  });

  return client;
};
