import { ErrorUtils as TErrorUtils } from 'react-native';
import { setNativeExceptionHandler } from 'react-native-exception-handler';

import { setErrorHandlers } from '../errorHandler';
import { captureException } from '../logger';

type ErrorUtilsExt = TErrorUtils & {
  reportError: (error: Error) => void;
  reportFatalError: (error: Error) => void;
};

jest.mock('react-native-exception-handler', () => {
  const real = jest.requireActual('react-native-exception-handler');
  return {
    ...real,
    setNativeExceptionHandler: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('error handler', () => {
  it('should set JS error handler', () => {
    const handler = ErrorUtils.getGlobalHandler();
    setErrorHandlers();
    expect(setNativeExceptionHandler).toBeCalledTimes(1);
    expect(ErrorUtils.getGlobalHandler()).not.toBe(handler);
  });

  it('should handle non-fatal error', () => {
    (ErrorUtils as ErrorUtilsExt).reportError(
      new Error('Something went wrong...'),
    );
    expect(captureException).toBeCalledTimes(1);
  });

  it('should handle fatal error', () => {
    (ErrorUtils as ErrorUtilsExt).reportFatalError(
      new Error('Something went terribly wrong...'),
    );
    expect(captureException).toBeCalledTimes(1);
  });
});
