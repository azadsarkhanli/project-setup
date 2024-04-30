import { renderHook } from '@testing-library/react-hooks';
import React, { FC } from 'react';

import {
  UserContext,
  UserContextValue,
} from '../../../common/context/UserContext/UserContext';
import { ActivationStatus } from '../../../common/graphql';
import { AppContext, AppContextType } from '../../context/AppProvider';
import { useAppState } from '../useAppState';

jest.mock('react-native-track-player', () => jest.fn());

const Wrapper =
  (userContextValue: UserContextValue, appContextValue: AppContextType): FC =>
  ({ children }) =>
    (
      <UserContext.Provider value={userContextValue}>
        <AppContext.Provider value={appContextValue}>
          {children}
        </AppContext.Provider>
      </UserContext.Provider>
    );

const mockUserContext = (status: ActivationStatus) =>
  ({
    user: {
      status,
    },
  } as UserContextValue);

const mockAppContext: AppContextType = {
  remoteConfig: {
    __typename: 'ClientConfiguration',
    minAppVersion: '2.0.0',
    events: {
      __typename: 'ClientEventsConfiguration',
      host: 'http://foo.bar',
      sendEvents: false,
      token: 'token',
    },
    feedback: {
      __typename: 'FeedbackConfiguration',
      url: 'http://foo.bar',
    },
    search: {
      __typename: 'ClientProductSearchConfiguration',
      appId: 'foo',
      key: 'foo',
      index: 'foo',
      filter: '["format:EB","format:LYD"]',
    },
  },
};

jest.mock('react-native-version-info', () => ({
  appVersion: '2.0.1',
}));

describe('useAppState', () => {
  it('should handle outdated state', () => {
    const appContext: AppContextType = {
      ...mockAppContext,
      remoteConfig: {
        ...mockAppContext.remoteConfig,
        minAppVersion: '2.0.2',
      },
    };

    const { result } = renderHook(() => useAppState(), {
      wrapper: Wrapper(mockUserContext(ActivationStatus.Active), appContext),
    });
    expect(result.current).toBe('outdated');
  });

  it('should handle outdated, unauthorized state', () => {
    const appContext: AppContextType = {
      ...mockAppContext,
      remoteConfig: {
        ...mockAppContext.remoteConfig,
        minAppVersion: '2.0.2',
      },
    };
    const userContext = {
      user: null,
    };

    const { result } = renderHook(() => useAppState(), {
      wrapper: Wrapper(userContext, appContext),
    });
    expect(result.current).toBe('outdated');
  });

  it('should handle ACTIVE state', () => {
    const { result } = renderHook(() => useAppState(), {
      wrapper: Wrapper(
        mockUserContext(ActivationStatus.Active),
        mockAppContext,
      ),
    });
    expect(result.current).toBe(ActivationStatus.Active);
  });

  it('should handle IDENTIFIED state', () => {
    const { result } = renderHook(() => useAppState(), {
      wrapper: Wrapper(
        mockUserContext(ActivationStatus.Identified),
        mockAppContext,
      ),
    });
    expect(result.current).toBe(ActivationStatus.Identified);
  });

  it('should handle unauthorized state', () => {
    const userContext = {
      user: null,
    };

    const { result } = renderHook(() => useAppState(), {
      wrapper: Wrapper(userContext, mockAppContext),
    });
    expect(result.current).toBe('unauthorized');
  });
});
