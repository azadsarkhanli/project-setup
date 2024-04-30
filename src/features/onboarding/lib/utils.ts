import { TokenData } from '../../../common/context/AuthContext';
import { Token } from '../graphql';

export const mapGraphQlToken = (token: Token): TokenData => ({
  access_token: token.accessToken,
  expires_at: token.expiresAt,
  id_token: token.idToken,
  refresh_token: token.refreshToken,
});
