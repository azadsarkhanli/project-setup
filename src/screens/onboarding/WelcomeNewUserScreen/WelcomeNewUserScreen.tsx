import React, { FC, useEffect, useState } from 'react';

import { LoadingScreen } from '../../../common/components/LoadingScreen/LoadingScreen';
import { track } from '../../../common/events';

import { BokskyaImportConfirmation } from './BokskyaImportConfirmation';
import { RegistrationConfirmation } from './RegistrationConfirmation';
import { useWelcomeNewUser } from './welcomeNewUserScreenUtil';

export const WelcomeNewUserScreen: FC = () => {
  const {
    isLoading,
    numberOfBooks,
    shouldShowConfirmationScreen,
    shouldShowImportScreen,
    shouldSkipWelcomeScreen,
    finish,
  } = useWelcomeNewUser();
  const [showNextSlide, setShowNextSlide] = useState(false);

  useEffect(() => {
    if (!isLoading && shouldSkipWelcomeScreen) {
      finish();
    }
  }, [isLoading, shouldSkipWelcomeScreen, finish]);

  useEffect(() => {
    if (shouldShowImportScreen) {
      track(['login_existing_books', { numberOfBooks }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShowImportScreen]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (shouldShowConfirmationScreen && !showNextSlide) {
    return (
      <RegistrationConfirmation
        onDismiss={finish}
        openNextSlide={
          shouldShowImportScreen ? () => setShowNextSlide(true) : undefined
        }
      />
    );
  }

  if (shouldShowImportScreen) {
    return (
      <BokskyaImportConfirmation
        numberOfBooks={numberOfBooks}
        onDismiss={finish}
      />
    );
  }

  return <LoadingScreen />;
};
