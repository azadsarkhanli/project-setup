import { VStack, Text, Box } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../common/components/Button';
import { OpenOutlineIcon } from '../../common/components/icons';
import { Illustration404 } from '../../common/components/illustrations';
import { Screen, ScreenProps } from '../../common/components/Screen';
import { ScreenHeader } from '../../common/components/ScreenHeader';

type Props = ScreenProps & {
  onUpdate: () => void;
};

export const AppOutdatedScreen: FC<Props> = ({ onUpdate }) => {
  const { t } = useTranslation('onboarding');

  return (
    <Screen header={<ScreenHeader centerLogo />}>
      <VStack p="6" pt="16" flex={1} justifyContent="center">
        <Box alignItems="center" flex={1}>
          <>
            <Illustration404 height="248px" width="248px" />
            <Text variant="h3" mt="12" textAlign="center">
              {t('appOutdated.title')}
            </Text>
            <Text variant="md" mt="2" textAlign="center">
              {t('appOutdated.appOutdatedText')}
            </Text>
            <Box flex={1} />
            <Button
              size="md"
              onPress={onUpdate}
              mb="4"
              width="full"
              rightIcon={<OpenOutlineIcon color="muted.50" mt={-1} />}
            >
              {t('appOutdated.updateButton')}
            </Button>
          </>
        </Box>
      </VStack>
    </Screen>
  );
};
