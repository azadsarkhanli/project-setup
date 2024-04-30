import crashlytics from '@react-native-firebase/crashlytics';

export const captureException = (exception: Error) => {
  if (__DEV__) {
    console.error(exception);
  }
  crashlytics().recordError(exception);
};
