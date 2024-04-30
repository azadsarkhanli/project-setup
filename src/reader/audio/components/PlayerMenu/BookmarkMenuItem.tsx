import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AddBookmarkIcon,
  RemoveBookmarkIcon,
} from '../../../../common/components/iconsOld';
import { usePlayerProgress } from '../../../../features/player/usePlayerProgress';
import { ReaderMenuItem } from '../../../common/components/ReaderMenu';
import {
  findBookmarkByLocator,
  positionToLocator,
} from '../../../common/utils';
import { MenuItemProps } from '../../../epub/components/EpubReaderMenu/types';
import { usePlayerContext } from '../../context/PlayerContext';

export const BookmarkMenuItem: FC<MenuItemProps> = () => {
  const { t } = useTranslation('reader');
  const { bookmarks, removeBookmark, addBookmark } = usePlayerContext();
  const { position, duration } = usePlayerProgress();

  const activeBookmark = useMemo(
    () =>
      position &&
      duration &&
      findBookmarkByLocator(
        bookmarks,
        positionToLocator(position, duration),
        6 / duration, // 6 second range
      ),
    [bookmarks, position, duration],
  );

  const handlePress = useCallback(() => {
    if (
      position === undefined ||
      !addBookmark ||
      !removeBookmark ||
      !duration
    ) {
      return;
    }
    activeBookmark
      ? removeBookmark(activeBookmark.id)
      : addBookmark(positionToLocator(position, duration));
  }, [activeBookmark, removeBookmark, addBookmark, position, duration]);

  const isActive = !!activeBookmark;

  return (
    <>
      <ReaderMenuItem
        Icon={isActive ? RemoveBookmarkIcon : AddBookmarkIcon}
        _icon={{
          size: 'md',
        }}
        accessibilityLabel={t('readerMenu.bookmarks.label')}
        isActive={isActive}
        onPress={handlePress}
      />
    </>
  );
};
