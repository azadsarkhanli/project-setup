import { useApolloClient } from '@apollo/client';

import { PublicationFragment, PublicationFragmentDoc } from '../graphql';

export const useCachedBook = (id: string) => {
  const client = useApolloClient();
  return client.readFragment<PublicationFragment>({
    id: `EbookPublication:${id}`,
    fragment: PublicationFragmentDoc,
  });
};
