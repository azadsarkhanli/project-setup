import { IconButton } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ListOutlineIcon } from '../../../../common/components/icons';
import { ReaderOutline } from '../ReaderOutline';

import { MenuItemProps } from './types';

export const OutlineMenuItem: FC<MenuItemProps> = ({
  isOpen,
  onClose,
  onPress,
}) => {
  const { t } = useTranslation('reader');

  return (
    <>
      <IconButton
        colorScheme="primary"
        size="sm"
        icon={<ListOutlineIcon size="md" />}
        accessibilityLabel={t('readerMenu.tableOfContents.label')}
        onPress={onPress}
        variant="unstyled"
      />
      <ReaderOutline isOpen={isOpen} onClose={onClose} />
    </>
  );
};
