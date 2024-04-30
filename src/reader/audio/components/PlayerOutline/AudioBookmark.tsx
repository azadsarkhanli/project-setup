import { Box, HStack, IconButton } from 'native-base';
import { IMenuComponent } from 'native-base/lib/typescript/components/composites/Menu/types';
import React, { FC, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { BookmarkIcon } from '../../../../common/components/icons';
import { PlayIcon } from '../../../../common/components/iconsOld';
import {
  TableCell,
  TableCellProps,
} from '../../../../common/components/TableCell';
import { Bookmark } from '../../../../features/catalog/types';
import { secondsToDuration } from '../../../../features/player/utils';

type AudioBookmarkProps = Omit<TableCellProps, 'title'> & {
  bookmark: Bookmark;
  contextMenu?: ReactElement<IMenuComponent>;
  duration?: number;
  onPlay: () => void;
  onIconPress?: () => void;
};

export const AudioBookmark: FC<AudioBookmarkProps> = ({
  contextMenu,
  bookmark,
  duration,
  onPlay,
  onIconPress,
  ...props
}) => {
  const { t } = useTranslation('player');

  const bookmarkTime = useMemo(
    () =>
      secondsToDuration(
        (bookmark.locator.locations?.totalProgression || 0) * (duration || 0),
      ),
    [bookmark, duration],
  );

  return (
    <TableCell
      variant="outline"
      size="sm"
      leftContent={
        <IconButton
          colorScheme="primary"
          variant="unstyled"
          icon={<BookmarkIcon size="md" />}
          onPress={onIconPress}
        />
      }
      rightContent={
        <HStack alignItems="center">
          <IconButton
            variant="unstyled"
            size="lg"
            icon={<PlayIcon color="primary.600" size="lg" />}
            onPress={onPlay}
          />
          <Box ml="auto">{contextMenu}</Box>
        </HStack>
      }
      title={t('playerMenu.outline.bookmarks.bookmarkTime', bookmarkTime)}
      subtitle={t('playerMenu.outline.bookmarks.createdAt', {
        date: new Date(bookmark.createdAt),
      })}
      {...props}
    />
  );
};
