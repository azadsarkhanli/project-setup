import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useBookshelf } from '../../../features/catalog/hooks/useBookshelf';
import {
  hasSeenWelcomeScreen,
  prefillUserInfo,
  markWelcomeScreenAsSeen,
} from '../../../features/onboarding/reducer/newUser';

export type NewUserUtilReturnType = {
  shouldShowImportScreen: boolean;
  shouldShowConfirmationScreen: boolean;
  shouldSkipWelcomeScreen: boolean;
  isLoading: boolean;
  numberOfBooks: number;
  finish: () => void;
};

export const useWelcomeNewUser = (): NewUserUtilReturnType => {
  const {
    items,
    query: { loading, error },
  } = useBookshelf();

  const dispatch = useDispatch();
  const newUserInfo = useSelector(prefillUserInfo);

  const finish = useCallback(() => {
    dispatch(markWelcomeScreenAsSeen());
  }, [dispatch]);

  const shouldShowImportScreen = !loading && items?.length > 0 && !error;
  const shouldShowConfirmationScreen = newUserInfo !== null;

  return {
    finish,
    shouldShowImportScreen,
    shouldShowConfirmationScreen,
    shouldSkipWelcomeScreen:
      !loading && !shouldShowImportScreen && !shouldShowConfirmationScreen,
    isLoading: loading,
    numberOfBooks: items?.length ?? 0,
  };
};

export const useShouldShowWelcomeNewUserScreen = (): boolean => {
  return !useSelector(hasSeenWelcomeScreen);
};
