import { VStack, Text, Box } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../common/components/Button';
import { Illustration404 } from '../../common/components/illustrations';
import { Screen, ScreenProps } from '../../common/components/Screen';

type Props = ScreenProps & {
  title?: string;
  description?: string;
  onRestart?: () => void;
  onTryAgain?: () => void;
  onClearDataAndRestart?: () => void;
};

export const ErrorScreen: FC<Props> = ({
  title,
  description,
  onRestart,
  onTryAgain,
  onClearDataAndRestart,
}) => {
  const { t } = useTranslation('common');

  return (
    <Screen>
      <VStack px="38" py="16" flex={1} justifyContent="center">
        <Box alignItems="center">
          <Illustration404 height="248px" width="248px" />
          <Text variant="h3" textAlign="center" mb="4" mt="20">
            {title ?? t('errorScreen.default.title')}
          </Text>
          <Text
            variant="md"
            _dark={{ color: 'muted.100' }}
            textAlign="center"
            mb="10"
          >
            {description ?? t('errorScreen.default.description')}
          </Text>
          {onTryAgain && (
            <Button size="md" onPress={onTryAgain} mb="4" width="full">
              {t('errorScreen.tryAgainButton')}
            </Button>
          )}
          {onRestart && (
            <Button
              size="md"
              onPress={onRestart}
              mb="4"
              variant="outline"
              width="full"
            >
              {t('errorScreen.restartButton')}
            </Button>
          )}
          {onClearDataAndRestart && (
            <Button
              size="md"
              onPress={onClearDataAndRestart}
              mb="4"
              variant="outline"
              width="full"
            >
              {t('errorScreen.clearDataAndRestartButton')}
            </Button>
          )}
        </Box>
      </VStack>
    </Screen>
  );
};
