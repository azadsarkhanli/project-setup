import { useEffect } from 'react';

import { useAuthContext } from '../../../common/context/AuthContext';
import { track } from '../../../common/events';
import { Maybe, TokenWithUser } from '../graphql';

import { mapGraphQlToken } from './utils';

export const useLoginTokenEffect = (
  tokenWithUser: Maybe<Pick<TokenWithUser, '__typename' | 'token'>>,
  from: 'login' | 'registration',
) => {
  const { setToken } = useAuthContext();

  return useEffect(() => {
    if (!tokenWithUser) {
      return;
    }
    const token = mapGraphQlToken(tokenWithUser.token);
    setToken(token);

    if (from === 'registration') {
      track(['registration_completed']);
    } else {
      track(['login_completed']);
    }
  }, [from, setToken, tokenWithUser]);
};
