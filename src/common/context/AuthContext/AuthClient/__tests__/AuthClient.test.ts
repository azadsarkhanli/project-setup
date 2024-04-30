import jwtEncode from 'jwt-encode';
import EncryptedStorage from 'react-native-encrypted-storage';

import {
  mockConfig,
  mockToken,
  mockRequestHandler,
} from '../../../../../utils/mocks/auth';
import { captureException } from '../../../../utils/logger';
import { AuthClient } from '../AuthClient';
import { UnauthorizedError } from '../errors';

beforeEach(() => {
  EncryptedStorage.clear();

  fetchMock.mockResponse(mockRequestHandler);
});

describe('AuthClient', () => {
  it('should handle not logged in state', async () => {
    const client = new AuthClient(mockConfig, EncryptedStorage);

    const isAuthenticated = await client.isAuthenticated();
    const token = await client.getAccessToken();

    expect(isAuthenticated).toBe(false);
    expect(token).toBeNull();
    expect(captureException).toBeCalledTimes(0);
  });

  it('should handle stored token', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockToken),
    );

    const client = new AuthClient(mockConfig, EncryptedStorage);

    const isAuthenticated = await client.isAuthenticated();
    const userId = await client.getUserId();
    const token = await client.getAccessToken();

    expect(userId).toBe('user-123');
    expect(isAuthenticated).toBe(true);
    expect(token).toBe('token-123');
    expect(captureException).toBeCalledTimes(0);
  });

  it('should handle login', async () => {
    const client = new AuthClient(mockConfig, EncryptedStorage);

    let isAuthenticated = await client.isAuthenticated();
    expect(isAuthenticated).toBe(false);

    await client.setTokenData(mockToken);

    isAuthenticated = await client.isAuthenticated();
    const token = await client.getAccessToken();

    expect(isAuthenticated).toBe(true);
    expect(token).toBe('token-123');
    expect(captureException).toBeCalledTimes(0);
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBe(
      JSON.stringify(mockToken),
    );
  });

  it('should handle logout', async () => {
    const client = new AuthClient(mockConfig, EncryptedStorage);

    await client.setTokenData(mockToken);

    let isAuthenticated = await client.isAuthenticated();
    expect(isAuthenticated).toBe(true);

    await client.logout();

    isAuthenticated = await client.isAuthenticated();
    const token = await client.getAccessToken();
    const userId = await client.getUserId();

    expect(isAuthenticated).toBe(false);
    expect(token).toBeNull();
    expect(userId).toBeNull();
    expect(captureException).toBeCalledTimes(0);
  });

  it('should handle expired access token', async () => {
    const client = new AuthClient(mockConfig, EncryptedStorage);

    const tokenData = {
      access_token: 'token-123',
      refresh_token: jwtEncode(
        {
          exp: 1893495600,
        },
        'secret',
      ),
      expires_at: Math.floor(Date.now() / 1000) - 1,
      id_token: 'id-token',
    };

    await client.setTokenData(tokenData);

    const isAuthenticated = await client.isAuthenticated();
    const token = await client.getAccessToken();

    expect(isAuthenticated).toBe(true);
    expect(token).toBe('new-token-123');
    expect(captureException).toBeCalledTimes(0);
  });

  it('should handle expired, revoked token', async () => {
    const client = new AuthClient(mockConfig, EncryptedStorage);

    const tokenData = {
      access_token: 'token-123',
      refresh_token: jwtEncode(
        {
          exp: 1893495601,
        },
        'secret',
      ),
      expires_at: Math.floor(Date.now() / 1000) - 1,
      id_token: 'id-token',
    };

    await client.setTokenData(tokenData);
    await expect(client.isAuthenticated()).rejects.toThrowError(
      UnauthorizedError,
    );
    const isAuthenticated = await client.isAuthenticated();
    const token = await client.getAccessToken();

    expect(isAuthenticated).toBe(false);
    expect(token).toBeNull();
    expect(captureException).toBeCalledTimes(0);
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
  });

  it('should handle invalid token', async () => {
    await EncryptedStorage.setItem('ark_app_access_token', 'test-not-a-json');
    const client = new AuthClient(mockConfig, EncryptedStorage);

    await expect(client.isAuthenticated()).rejects.toThrow(
      'Unexpected token e in JSON at position 1',
    );
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
  });

  it('should handle expire token in offline state', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify({
        access_token: 'token-123',
        refresh_token: jwtEncode(
          {
            exp: 1893495600,
          },
          'secret',
        ),
        expires_at: Math.floor(Date.now() / 1000) - 1,
        id_token: 'id-token',
      }),
    );
    fetchMock.mockReject(new Error('network error'));

    const client = new AuthClient(mockConfig, EncryptedStorage);
    expect(await client.isAuthenticated()).toBeTruthy();
  });

  it('should handle no token in offline state', async () => {
    fetchMock.mockReject(new Error('network error'));

    const client = new AuthClient(mockConfig, EncryptedStorage);
    expect(await client.isAuthenticated()).toBeFalsy();
  });
});
