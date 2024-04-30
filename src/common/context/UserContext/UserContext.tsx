import { createContext } from 'react';

import { Maybe, UserFragment } from '../../graphql';

export type UserContextValue = {
  user?: Maybe<UserFragment>;
};

export const UserContext = createContext<UserContextValue>({});
