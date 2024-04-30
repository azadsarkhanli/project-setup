import renderer from '@arkapp/test-utils/test-renderer';
import React from 'react';

import { LoadingScreen } from '../../../../common/components/LoadingScreen';
import { BokskyaImportConfirmation } from '../BokskyaImportConfirmation';
import { RegistrationConfirmation } from '../RegistrationConfirmation';
import { WelcomeNewUserScreen } from '../WelcomeNewUserScreen';
import * as WelcomeNewUserUtil from '../welcomeNewUserScreenUtil';

const getTestInstance = () => {
  return renderer.create(<WelcomeNewUserScreen />).root;
};

describe('WelcomeNewUserScreen', () => {
  it('should show loading screen during processing', () => {
    const hookResult: WelcomeNewUserUtil.NewUserUtilReturnType = {
      isLoading: true,
      shouldShowImportScreen: false,
      shouldShowConfirmationScreen: false,
      shouldSkipWelcomeScreen: false,
      numberOfBooks: 5,
      finish: jest.fn(),
    };

    jest
      .spyOn(WelcomeNewUserUtil, 'useWelcomeNewUser')
      .mockReturnValue(hookResult);

    const instance = getTestInstance();
    expect(instance.findByType(LoadingScreen)).toBeTruthy();
  });

  it('should wrap both slides into carousel', () => {
    const hookResult: WelcomeNewUserUtil.NewUserUtilReturnType = {
      isLoading: false,
      shouldShowImportScreen: true,
      shouldShowConfirmationScreen: true,
      shouldSkipWelcomeScreen: false,
      numberOfBooks: 5,
      finish: jest.fn(),
    };

    jest
      .spyOn(WelcomeNewUserUtil, 'useWelcomeNewUser')
      .mockReturnValue(hookResult);

    const instance = getTestInstance();
    const confirmationInstance = instance.findByType(RegistrationConfirmation);
    expect(confirmationInstance).toBeTruthy();
    expect(confirmationInstance.props.openNextSlide).toBeTruthy();
    expect(instance.findAllByType(BokskyaImportConfirmation).length).toEqual(0);
  });

  it('should show standalone registration screen if no books were imported', () => {
    const hookResult: WelcomeNewUserUtil.NewUserUtilReturnType = {
      isLoading: false,
      shouldShowImportScreen: false,
      shouldShowConfirmationScreen: true,
      shouldSkipWelcomeScreen: false,
      numberOfBooks: 5,
      finish: jest.fn(),
    };

    jest
      .spyOn(WelcomeNewUserUtil, 'useWelcomeNewUser')
      .mockReturnValue(hookResult);

    const instance = getTestInstance();
    const confirmationInstance = instance.findByType(RegistrationConfirmation);
    expect(confirmationInstance).toBeTruthy();
    expect(confirmationInstance.props.onDismiss).toBeTruthy();
    expect(confirmationInstance.props.openNextSlide).toBeFalsy();
    expect(instance.findAllByType(BokskyaImportConfirmation).length).toEqual(0);
  });

  it('should show standalone import screen if no new user info is available', () => {
    const hookResult: WelcomeNewUserUtil.NewUserUtilReturnType = {
      isLoading: false,
      shouldShowImportScreen: true,
      shouldShowConfirmationScreen: false,
      shouldSkipWelcomeScreen: false,
      numberOfBooks: 5,
      finish: jest.fn(),
    };

    jest
      .spyOn(WelcomeNewUserUtil, 'useWelcomeNewUser')
      .mockReturnValue(hookResult);

    const instance = getTestInstance();
    const bokskyaInstance = instance.findByType(BokskyaImportConfirmation);
    expect(instance.findAllByType(RegistrationConfirmation).length).toEqual(0);
    expect(bokskyaInstance).toBeTruthy();
    expect(bokskyaInstance.props.onDismiss).toBeTruthy();
  });
});
