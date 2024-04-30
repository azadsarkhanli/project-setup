import { useEffect } from 'react';

import { GraphQlError } from '../types';

import { toJsError } from './graphQlErrors';
import { captureException } from './logger';

export const useLogGraphQlError = (queryName: string, error?: GraphQlError) => {
  useEffect(() => {
    if (error) {
      if (error.__typename === 'NetworkError') {
        return;
      }
      captureException(toJsError(queryName, error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};
