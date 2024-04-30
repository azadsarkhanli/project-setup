import { stringify } from 'query-string';

import { TokenData } from '..';
import { track } from '../../../events';

import { NetworkError, ServerError, UnauthorizedError } from './errors';

export type AuthClientConfig = {
  tokenEndpoint: string;
  revokeEndpoint: string;
};

export const refresh = async (
  { tokenEndpoint }: AuthClientConfig,
  refreshToken: string,
): Promise<TokenData> => {
  if (!refreshToken) {
    throw new Error('Please pass in a refresh token');
  }
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });
  let response: Response;
  try {
    response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers,
      body,
    });
  } catch (e) {
    throw new NetworkError();
  }

  if (response.ok) {
    const token = await response.json();
    validateToken(token);
    return token;
  }

  const message = await response.text();
  switch (response.status) {
    case 400:
    case 403:
      track(['client_error_on_refresh']);
      throw new UnauthorizedError(message || response.statusText);
    default:
      track(['server_error_on_refresh']);
      throw new ServerError(message || response.statusText);
  }
};

export const revoke = async (
  { revokeEndpoint }: AuthClientConfig,
  refreshToken: string,
): Promise<void> => {
  if (!refreshToken) {
    throw new Error('Please pass in a refresh token');
  }
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = stringify({
    token: refreshToken,
  });
  let response: Response;
  try {
    response = await fetch(revokeEndpoint, {
      method: 'POST',
      headers,
      body,
    });
  } catch (e) {
    throw new NetworkError();
  }

  if (response.ok) {
    return;
  }

  const message = await response.text();
  switch (response.status) {
    case 400:
    case 403:
      track(['client_error_on_revoke']);
      throw new UnauthorizedError(message || response.statusText);
    default:
      track(['server_error_on_revoke']);
      throw new ServerError(message || response.statusText);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateToken(token: any): asserts token is TokenData {
  if (!token.access_token || !token.refresh_token || !token.expires_at) {
    track(['validate_token_error']);
    // we got 200 from server, but no token data, which means that something went wrong on the server
    throw new ServerError();
  }
}
