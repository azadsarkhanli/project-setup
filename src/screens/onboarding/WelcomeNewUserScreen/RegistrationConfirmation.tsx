import { Text, VStack, Box } from 'native-base';
import React, { VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../common/components/Button/Button';
import { IllustrationExplorer } from '../../../common/components/illustrations';
import { Screen } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';

type Props = {
  onDismiss?: () => void;
  openNextSlide?: () => void;
};

export const RegistrationConfirmation: VFC<Props> = ({
  onDismiss,
  openNextSlide,
}) => {
  const { t } = useTranslation('onboarding');
  return (
    <Screen p={6} header={<ScreenHeader centerLogo />}>
      <VStack alignItems="center" width="100%" flex={1}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <IllustrationExplorer />
          <Text variant="h3" mt={12} textAlign="center">
            {t('welcomeNewUserScreen.registrationConfirmationTitle')}
          </Text>
          <Text
            variant="md"
            color="secondary.900"
            _dark={{ color: 'muted.300' }}
            mt={4}
            textAlign="center"
          >
            {t('welcomeNewUserScreen.registrationConfirmationDescription')}
          </Text>
        </Box>
        <Button
          colorScheme="primary"
          size="md"
          w="full"
          onPress={onDismiss || openNextSlide}
        >
          {t(
            openNextSlide
              ? 'welcomeNewUserScreen.next'
              : 'welcomeNewUserScreen.finish',
          )}
        </Button>
      </VStack>
    </Screen>
  );
};
