import { onError } from '@apollo/client/link/error';

import { captureException } from '../../../../common/utils/logger';

export const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(error => captureException(error));
  }
});
