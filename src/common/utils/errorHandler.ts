import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

import { captureException } from './logger';

const JsErrorHandler = (e: Error) => {
  captureException(e);
};

const nativeErrorHandler = (errorString: string) => {
  captureException(new Error(errorString));
};

export const setErrorHandlers = () => {
  setJSExceptionHandler(JsErrorHandler, true);
  setNativeExceptionHandler(nativeErrorHandler, false);
};
