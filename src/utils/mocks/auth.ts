import { MockResponseInitFunction } from 'jest-fetch-mock/types';
import jwtEncode from 'jwt-encode';

export const mockConfig = {
  tokenEndpoint: 'https://test.ark.no.localhost/oauth/token',
  revokeEndpoint: 'https://test.ark.no.localhost/oauth/revoke',
};

export const mockToken = {
  access_token: 'token-123',
  refresh_token: jwtEncode(
    {
      exp: 1893495600,
    },
    'secret',
  ),
  expires_at: 1893495600, // Tue Jan 01 2030 11:00:00 GMT+0000
  id_token: jwtEncode({ uuid: 'user-123' }, 'secret'),
};

export const mockExpiredRefreshToken = {
  access_token: 'token-123',
  refresh_token: jwtEncode(
    {
      exp: Math.floor(Date.now() / 1000) - 1,
    },
    'secret',
  ),
  expires_at: Math.floor(Date.now() / 1000) - 1,
  id_token: jwtEncode({ uuid: 'user-123' }, 'secret'),
};

export const mockRequestHandler: MockResponseInitFunction = async req => {
  const body = await req.text();
  switch (req.url) {
    case 'https://test.ark.no.localhost/oauth/token': {
      if (
        body ===
        `grant_type=refresh_token&refresh_token=${jwtEncode(
          {
            exp: 1893495600,
          },
          'secret',
        )}`
      ) {
        return {
          status: 200,
          body: JSON.stringify({
            ...mockToken,
            access_token: 'new-token-123',
          }),
        };
      }
      if (
        body ===
        `grant_type=refresh_token&refresh_token=${jwtEncode(
          {
            exp: 1893495601,
          },
          'secret',
        )}`
      ) {
        return {
          status: 403,
        };
      }
      return {
        status: 400,
      };
    }
    case 'https://test.ark.no.localhost/oauth/revoke': {
      if (
        body ===
        `token=${jwtEncode(
          {
            exp: 1893495600,
          },
          'secret',
        )}`
      ) {
        return {
          status: 200,
          body: JSON.stringify({
            success: true,
          }),
        };
      }
      return {
        status: 403,
      };
    }
    default:
      return {
        status: 404,
      };
  }
};
