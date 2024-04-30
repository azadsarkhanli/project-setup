import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SpeedIcon } from '../../../../common/components/iconsOld';
import { ReaderMenuItem } from '../../../common/components/ReaderMenu';
import { MenuItemProps } from '../../../epub/components/EpubReaderMenu/types';
import { PlaybackSettings } from '../PlaybackSettings/PlaybackSettings';

export const PlaybackSpeedMenuItem: FC<MenuItemProps> = ({
  isOpen,
  onClose,
  onPress,
}) => {
  const { t } = useTranslation('player');

  return (
    <>
      <ReaderMenuItem
        Icon={SpeedIcon}
        _icon={{
          size: 'md',
        }}
        accessibilityLabel={t('playbackSettings.speed')}
        onPress={onPress}
      />
      <PlaybackSettings isOpen={isOpen} onClose={onClose} />
    </>
  );
};
