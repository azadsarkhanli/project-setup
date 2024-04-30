import { act, renderHook } from '@testing-library/react-hooks';
import jwtEncode from 'jwt-encode';
import React, { FC } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { Provider } from 'react-redux';

import { store } from '../../../../app/context/ReduxProvider/store';
import {
  mockConfig,
  mockToken,
  mockRequestHandler,
  mockExpiredRefreshToken,
} from '../../../../utils/mocks/auth';
import { NativeBaseProvider } from '../../../components/NativeBaseProvider';
import { captureException } from '../../../utils/logger';
import { AuthProvider } from '../AuthProvider';
import { useAuthContext } from '../useAuthContext';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((_config, reducers) => reducers),
  };
});

const mockPlayerPauseFn = jest.fn();
const mockPlayerResetFn = jest.fn();
jest.mock('react-native-track-player', () => ({
  State: { Playing: 2 },
  getState: () => 2, // Playing
  pause: () => mockPlayerPauseFn(),
  reset: () => mockPlayerResetFn(),
}));

const wait = () =>
  act(async () => {
    await jest.runAllTimers();
  });

const mockLogoutHandler = jest.fn();

jest.mock('../useLogoutHandler', () => ({
  useLogoutHandler: () => mockLogoutHandler,
}));

const Wrapper: FC = ({ children }) => (
  <Provider store={store}>
    <NativeBaseProvider colorMode="light">
      <AuthProvider config={mockConfig}>{children}</AuthProvider>
    </NativeBaseProvider>
  </Provider>
);

beforeEach(() => {
  EncryptedStorage.clear();

  fetchMock.mockResponse(mockRequestHandler);

  mockLogoutHandler.mockClear();
});

describe('AuthProvider', () => {
  it('should handle token not stored', async () => {
    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle stored token', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockToken),
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBe('user-123');
    expect(await result.current.getAccessToken()).toBe(mockToken.access_token);
  });

  it('should handle login', async () => {
    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBeNull();

    await act(async () => {
      await result.current.setToken(mockToken);
    });

    expect(result.current.userId).toBe('user-123');
    expect(await result.current.getAccessToken()).toBe(mockToken.access_token);
  });

  it('should handle expired access token', async () => {
    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    const tokenData = {
      access_token: 'token-123',
      refresh_token: jwtEncode(
        {
          exp: 1893495600,
        },
        'secret',
      ),
      expires_at: Math.floor(Date.now() / 1000) - 1,
      id_token: jwtEncode({ uuid: 'user-123' }, 'secret'),
    };

    await act(async () => {
      await result.current.setToken(tokenData);
    });

    expect(result.current.userId).toBe('user-123');
    expect(await result.current.getAccessToken()).toBe('new-token-123');
  });

  it('should handle expired, revoked token', async () => {
    const tokenData = {
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
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(tokenData),
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBe('user-123');

    await act(async () => {
      await result.current.getAccessToken();
    });

    expect(result.current.userId).toBeNull();
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
    expect(mockLogoutHandler).toHaveBeenCalledTimes(1);
  });

  it('should handle invalid token', async () => {
    await EncryptedStorage.setItem('ark_app_access_token', 'test-not-a-json');

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBeNull();
    expect(captureException).toBeCalledTimes(1);
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
  });

  it('should handle expire token in offline state', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockExpiredRefreshToken),
    );
    fetchMock.mockReject(new Error('network error'));

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();
    expect(result.current.userId).toBe('user-123');
  });

  it('should handle no token in offline state', async () => {
    fetchMock.mockReject(new Error('network error'));

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();
    expect(result.current.userId).toBeNull();
  });

  it('should handle UnauthorizedError when refreshing access token', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockExpiredRefreshToken),
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBe('user-123');

    jest.spyOn(Date, 'now').mockImplementation(() => 1893495599000);
    fetchMock.mockResponse(async () => ({
      status: 403,
    }));

    await act(async () => {
      const token = await result.current.getAccessToken();
      expect(token).toBeNull();
    });
    expect(result.current.userId).toBeNull();
    expect(mockLogoutHandler).toHaveBeenCalledTimes(1);
  });

  it('should handle logout', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockToken),
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBe('user-123');

    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.userId).toBeNull();
    expect(mockLogoutHandler).toHaveBeenCalledTimes(1);
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
  });

  it('should handle offline logout', async () => {
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockToken),
    );
    fetchMock.mockReject();

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await wait();

    expect(result.current.userId).toBe('user-123');

    await act(async () => {
      await result.current.logout();
    });

    expect(result.current.userId).toBeNull();
    expect(mockLogoutHandler).toHaveBeenCalledTimes(1);
    expect(await EncryptedStorage.getItem('ark_app_access_token')).toBeNull();
  });

  it('should pause player on logout', async () => {
    mockPlayerPauseFn.mockReset();
    mockPlayerResetFn.mockReset();
    await EncryptedStorage.setItem(
      'ark_app_access_token',
      JSON.stringify(mockToken),
    );

    const { result } = renderHook(() => useAuthContext(), {
      wrapper: Wrapper,
    });
    await act(async () => {
      await result.current.logout();
    });
    expect(mockPlayerPauseFn).toHaveBeenCalledTimes(1);
    expect(mockPlayerResetFn).toHaveBeenCalledTimes(1);
  });
});
