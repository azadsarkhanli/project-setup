import { VStack, Text, Box } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../common/components/Button';
import { IllustrationExplorer } from '../../../common/components/illustrations';
import { Screen, ScreenProps } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';

type Props = ScreenProps & {
  onLogin?: () => void;
  onRegister?: () => void;
};

export const WelcomeScreen: FC<Props> = ({ onLogin, onRegister }) => {
  const { t } = useTranslation('onboarding');

  return (
    <Screen>
      <ScreenHeader centerLogo />
      <VStack m="6" flex={1} justifyContent="flex-end" alignItems="center">
        <Box flex={1} alignItems="center" justifyContent="center">
          <IllustrationExplorer />
          <Text variant="h3" textAlign="center" mt="12" mb="4">
            {t('welcomeScreen.heading')}
          </Text>
          <Text
            variant="md"
            color="muted.600"
            _dark={{ color: 'muted.100' }}
            textAlign="center"
            mb="6"
          >
            {t('welcomeScreen.body')}
          </Text>
        </Box>
        <VStack space="5" width="100%">
          {onLogin && (
            <Button
              colorScheme="primary"
              size="md"
              w="full"
              onPress={onLogin}
              accessibilityLabel={t('welcomeScreen.loginButtonLabel')}
            >
              {t('welcomeScreen.loginButton')}
            </Button>
          )}
          {onRegister && (
            <Button
              colorScheme="primary"
              variant="ghost"
              size="md"
              w="full"
              onPress={onRegister}
              accessibilityLabel={t('welcomeScreen.registerButtonLabel')}
            >
              {t('welcomeScreen.registerButton')}
            </Button>
          )}
        </VStack>
      </VStack>
    </Screen>
  );
};
