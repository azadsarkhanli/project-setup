import { Text, VStack, Box } from 'native-base';
import React, { VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../common/components/Button/Button';
import { IllustrationBooks } from '../../../common/components/illustrations';
import { Screen } from '../../../common/components/Screen';
import { ScreenHeader } from '../../../common/components/ScreenHeader';

type Props = {
  numberOfBooks: number;
  onDismiss?: () => void;
};

export const BokskyaImportConfirmation: VFC<Props> = ({
  numberOfBooks,
  onDismiss,
}) => {
  const { t } = useTranslation('onboarding');
  return (
    <Screen p={6} header={<ScreenHeader centerLogo />}>
      <VStack alignItems="center" width="100%" flex={1}>
        <Box flex={1} alignItems="center" justifyContent="center">
          <IllustrationBooks />
          <Text variant="h3" mt={10} textAlign="center">
            {t('welcomeNewUserScreen.bokskyaImportTitle')}
          </Text>
          <Text
            variant="md"
            color="secondary.900"
            _dark={{ color: 'muted.300' }}
            mt={4}
            textAlign="center"
          >
            {t('welcomeNewUserScreen.bokskyaImportTitleDescription', {
              numberOfBooks,
            })}
          </Text>
        </Box>
        <Button colorScheme="primary" size="md" w="full" onPress={onDismiss}>
          {t('welcomeNewUserScreen.finish')}
        </Button>
      </VStack>
    </Screen>
  );
};
