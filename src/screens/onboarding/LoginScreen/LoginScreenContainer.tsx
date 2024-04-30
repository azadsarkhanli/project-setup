import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { track } from '../../../common/events';
import { RootStackParamList } from '../../../common/navigation';
import { useErrorToast } from '../../../common/useErrorToast';
import { captureException } from '../../../common/utils/logger';
import { useCreatePasswordlessConnection } from '../../../features/onboarding/lib/passwordlessLogin';
import { saveCodeVerifier } from '../../../features/onboarding/reducer/auth';

import { LoginScreen } from './LoginScreen';
import { EmailFormValues } from './useEmailForm';

export type LoginScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginLandingPage'
>;

export const LoginScreenContainer: FC<LoginScreenContainerProps> = ({
  navigation,
}) => {
  const { createConnection, codeVerifier, connection, loading, error } =
    useCreatePasswordlessConnection();
  const { t } = useTranslation('onboarding');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    ({ email }: EmailFormValues) => {
      return createConnection(email);
    },
    [createConnection],
  );

  useEffect(() => {
    if (connection) {
      if (codeVerifier) {
        dispatch(
          saveCodeVerifier({
            id: connection.id,
            codeVerifier,
          }),
        );
        navigation.navigate('LoginEmailVerification', {
          connectionId: connection.id,
          codeVerifier,
        });
        track(['login_started']);
      } else {
        captureException(
          new Error(
            `Created passwordless connection without code verifier ${connection.id}`,
          ),
        );
      }
    }
  }, [codeVerifier, connection, dispatch, navigation]);

  useErrorToast(error?.__typename !== 'UserNotFoundError' ? error : null);

  const formError = useMemo(() => {
    if (error?.__typename === 'UserNotFoundError') {
      return {
        name: 'email',
        message: t('loginScreen.validation.userNotFound'),
      } as const;
    }
  }, [error, t]);

  return (
    <LoginScreen
      error={formError}
      loading={loading}
      onGoBack={navigation.goBack}
      onSubmit={handleSubmit}
    />
  );
};
