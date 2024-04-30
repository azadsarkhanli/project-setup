// @ts-ignore
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { enableFetchMocks } from 'jest-fetch-mock';
// @ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// https://github.com/facebook/jest/issues/8987#issuecomment-584898030
let mockActualReact: unknown;
jest.doMock('react', () => {
  if (!mockActualReact) {
    mockActualReact = jest.requireActual('react');
  }
  return mockActualReact;
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@react-native-firebase/crashlytics', () => () => ({
  setUserId: jest.fn(),
  recordError: jest.fn(),
}));

jest.mock('../../common/utils/logger', () => ({
  captureException: jest.fn(),
}));

jest.mock('../../common/events', () => ({
  track: jest.fn(),
  trackNavigation: jest.fn(),
}));

enableFetchMocks();
