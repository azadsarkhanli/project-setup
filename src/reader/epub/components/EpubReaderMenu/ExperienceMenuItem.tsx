import { IconButton } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TextOutlineIcon } from '../../../../common/components/icons';
import { ReaderExperienceSettings } from '../ReaderExperienceSettings';

import { MenuItemProps } from './types';

export const ExperienceMenuItem: FC<MenuItemProps> = ({
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
        icon={<TextOutlineIcon size="md" />}
        accessibilityLabel={t('readerMenu.readingExperience.label')}
        onPress={onPress}
        variant="unstyled"
      />
      <ReaderExperienceSettings isOpen={isOpen} onClose={onClose} />
    </>
  );
};
