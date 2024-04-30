import { Button, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';

type Props = {
  onGoBack: () => void;
  onOpenEmail?: () => void;
  onResend?: () => void;
};

export const LoginApprovalScreen: FC<Props> = ({
  onGoBack,
  onOpenEmail,
  onResend,
}) => {
  const { t } = useTranslation('onboarding');
  return (
    <Screen header={<ScreenHeader onGoBack={onGoBack} centerLogo />}>
      <VStack flex={1} alignItems="center" my="9" mx="6">
        <Text variant="h3" textAlign="center" mb="3">
          {t('loginApprovalScreen.title')}
        </Text>
        <Text variant="md" textAlign="center" mb="8">
          {t('loginApprovalScreen.subtitle')}
        </Text>
        {onOpenEmail && (
          <Button
            colorScheme="primary"
            variant="ghost"
            size="md"
            mb="8"
            w="full"
            onPress={onOpenEmail}
          >
            {t('loginApprovalScreen.openEmailButton')}
          </Button>
        )}
        <Text variant="md" textAlign="center" mb="4">
          {t('loginApprovalScreen.notReceivedText')}
        </Text>
        {onResend && (
          <Button
            colorScheme="primary"
            variant="ghost"
            size="sm"
            onPress={onResend}
          >
            {t('loginApprovalScreen.resendButton')}
          </Button>
        )}
      </VStack>
    </Screen>
  );
};
