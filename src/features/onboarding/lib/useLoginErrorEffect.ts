import { useEffect } from 'react';

import { track } from '../../../common/events';
import { GraphQlError } from '../../../common/types';
import { Maybe } from '../graphql';

export const useLoginErrorEffect = (error?: Maybe<GraphQlError>) => {
  return useEffect(() => {
    if (error) {
      track(['login_error', { type: error.__typename }]);
    }
  }, [error]);
};
