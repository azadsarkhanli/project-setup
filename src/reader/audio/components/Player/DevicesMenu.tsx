import { Button } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeadphonesIcon } from '../../../../common/components/iconsOld';

export const DevicesMenu = () => {
  // TODO: PA-712
  const { t } = useTranslation('player');
  return (
    <Button
      variant="ghost"
      size="sm"
      colorScheme="secondary"
      color="secondary.500"
      _text={{ _dark: { color: 'secondary.500' } }}
      startIcon={<HeadphonesIcon size="sm" />}
    >
      {t('devicesMenu.buttonListeningDevices')}
    </Button>
  );
};
