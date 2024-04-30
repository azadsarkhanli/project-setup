import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';

import { RootStackParamList } from '../../../common/navigation';
import { useErrorToast } from '../../../common/useErrorToast';

import { WelcomeScreen } from './WelcomeScreen';

export type WelcomeScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export const WelcomeScreenContainer: FC<WelcomeScreenContainerProps> = ({
  navigation,
  route,
}) => {
  const error = route.params?.error;

  const onLoginPress = useCallback(() => {
    navigation.navigate('LoginLandingPage');
  }, [navigation]);

  const onRegisterPress = useCallback(() => {
    navigation.navigate('RegisterNewUser');
  }, [navigation]);

  useErrorToast(error);

  return <WelcomeScreen onLogin={onLoginPress} onRegister={onRegisterPress} />;
};
