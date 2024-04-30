import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { SleepIcon } from '../../../../common/components/iconsOld';
import { ReaderMenuItem } from '../../../common/components/ReaderMenu';
import { MenuItemProps } from '../../../epub/components/EpubReaderMenu/types';
import { SleepTimer } from '../SleepTimer/SleepTimer';

export const SleepTimerMenuItem: FC<MenuItemProps> = ({
  isOpen,
  onClose,
  onPress,
}) => {
  const { t } = useTranslation('reader');

  return (
    <>
      <ReaderMenuItem
        Icon={SleepIcon}
        _icon={{
          size: 'md',
        }}
        accessibilityLabel={t('readerMenu.bookmarks.label')}
        onPress={onPress}
      />
      <SleepTimer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
