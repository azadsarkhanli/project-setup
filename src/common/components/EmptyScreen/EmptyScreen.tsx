import { Button, Text } from 'native-base';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';

import { OpenOutlineIcon } from '../icons';
import { IllustrationGirlInChair } from '../illustrations';
import { Screen, ScreenProps } from '../Screen';

export type EmptyScreenProps = ScreenProps;

const url = 'https://www.ark.no';

export const EmptyScreen: FC<ScreenProps> = props => {
  const { t } = useTranslation('common');

  const onPress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, []);

  return (
    <Screen
      justifyContent="center"
      alignItems="center"
      px="6"
      withoutScroll
      {...props}
    >
      <IllustrationGirlInChair height="248px" width="248px" />
      <Text variant="h4" mt="12" textAlign="center">
        {t('emptyScreen.title')}
      </Text>
      <Text variant="md" mt="2" textAlign="center">
        {t('emptyScreen.description')}
      </Text>
      <Button
        mt="12"
        variant="ghost"
        colorScheme="primary"
        size="md"
        width="full"
        rightIcon={<OpenOutlineIcon color="primary.700" mt={-1} />}
        onPress={onPress}
      >
        {t('emptyScreen.button')}
      </Button>
    </Screen>
  );
};
