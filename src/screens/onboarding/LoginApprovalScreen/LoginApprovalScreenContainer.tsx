import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { openInbox } from 'react-native-email-link';

import { LoadingScreen } from '../../../common/components/LoadingScreen';
import { LoginSessionStatus } from '../../../common/graphql';
import { RootStackParamList } from '../../../common/navigation';
import { useCheckPasswordlessConnection } from '../../../features/onboarding/lib/passwordlessLogin';
import { useLoginErrorEffect } from '../../../features/onboarding/lib/useLoginErrorEffect';
import { useLoginTokenEffect } from '../../../features/onboarding/lib/useLoginTokenEffect';
import { ErrorScreen } from '../../ErrorScreen';

import { LoginApprovalScreen } from './LoginApprovalScreen';

export type LoginApprovalScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginEmailVerification'
>;

export const LoginApprovalScreenContainer: FC<
  LoginApprovalScreenContainerProps
> = ({ navigation: { goBack }, route }) => {
  const { connectionId, codeVerifier } = route.params || {};
  const { t } = useTranslation('onboarding');

  const { passwordlessConnection, tokenWithUser, error } =
    useCheckPasswordlessConnection({
      id: connectionId,
      codeVerifier,
    });

  useLoginErrorEffect(error);
  useLoginTokenEffect(tokenWithUser, 'login');

  const handleOpenEmail = useCallback(() => {
    openInbox({
      title: t('loginApprovalScreen.openEmailActionsheet.title'),
      message: t('loginApprovalScreen.openEmailActionsheet.message'),
    });
  }, [t]);

  if (tokenWithUser) {
    return <LoadingScreen />;
  }

  if (isFailedStatus(passwordlessConnection?.status) || error) {
    return (
      <ErrorScreen
        title={t('loginApprovalScreen.error.title')}
        description={t('loginApprovalScreen.error.description')}
        onTryAgain={goBack}
      />
    );
  }

  return (
    <LoginApprovalScreen onGoBack={goBack} onOpenEmail={handleOpenEmail} />
  );
};

const isFailedStatus = (status?: LoginSessionStatus) =>
  status === LoginSessionStatus.Expired ||
  status === LoginSessionStatus.Inactive;
