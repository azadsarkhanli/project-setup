import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ListIcon } from '../../../../common/components/iconsOld';
import { ReaderMenuItem } from '../../../common/components/ReaderMenu';
import { MenuItemProps } from '../../../epub/components/EpubReaderMenu/types';
import { PlayerOutline } from '../PlayerOutline';

export const OutlineMenuItem: FC<MenuItemProps> = ({
  isOpen,
  onClose,
  onPress,
}) => {
  const { t } = useTranslation('reader');
  return (
    <>
      <ReaderMenuItem
        Icon={ListIcon}
        _icon={{
          size: 'md',
        }}
        accessibilityLabel={t('readerMenu.tableOfContents.label')}
        onPress={onPress}
      />
      <PlayerOutline isOpen={isOpen} onClose={onClose} />
    </>
  );
};
