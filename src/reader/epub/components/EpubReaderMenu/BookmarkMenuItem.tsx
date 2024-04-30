import { IconButton } from 'native-base';
import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  BookmarkIcon,
  BookmarkOutlineIcon,
} from '../../../../common/components/icons';
import { findBookmarkByLocator } from '../../../common/utils';
import { useReaderContext } from '../../context/ReaderContext';

import { MenuItemProps } from './types';

export const BookmarkMenuItem: FC<MenuItemProps> = () => {
  const { addBookmark, removeBookmark, bookmarks, currentLocator } =
    useReaderContext();
  const { t } = useTranslation('reader');

  const activeBookmark = useMemo(
    () => findBookmarkByLocator(bookmarks, currentLocator),
    [bookmarks, currentLocator],
  );

  const handlePress = useCallback(() => {
    if (!currentLocator) {
      return;
    }
    activeBookmark
      ? removeBookmark(activeBookmark.id)
      : addBookmark(currentLocator);
  }, [activeBookmark, addBookmark, removeBookmark, currentLocator]);

  const isActive = !!activeBookmark;

  const Icon = isActive ? BookmarkIcon : BookmarkOutlineIcon;

  return (
    <IconButton
      colorScheme="primary"
      size="sm"
      icon={<Icon size="md" />}
      accessibilityLabel={t('readerMenu.bookmarks.label')}
      onPress={handlePress}
      variant="unstyled"
    />
  );
};
