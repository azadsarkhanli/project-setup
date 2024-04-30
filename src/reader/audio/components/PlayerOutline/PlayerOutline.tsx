import { Box, IconButton } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FullScreenModal } from '../../../../common/components/FullScreenModal';
import { CloseOutlineIcon } from '../../../../common/components/icons';
import { ScreenHeader } from '../../../../common/components/ScreenHeader';
import { Bookmark } from '../../../../features/catalog/types';
import { usePlayerProgress } from '../../../../features/player/usePlayerProgress';
import { Bookmarks } from '../../../common/components/Bookmarks';
import { usePlayerContext } from '../../context/PlayerContext';

import { AudioBookmark } from './AudioBookmark';

export type ReaderOutlineProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export const PlayerOutline: FC<ReaderOutlineProps> = ({ isOpen, onClose }) => {
  const { goToLocatorAndPlay, publication, bookmarks, removeBookmark } =
    usePlayerContext();
  const { duration } = usePlayerProgress();
  const { t } = useTranslation('player');

  if (!publication || !removeBookmark) {
    return null;
  }

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose}>
      <ScreenHeader
        title={t('playerMenu.outline.titleBookmarks')}
        rightContent={
          <IconButton
            colorScheme="primary"
            variant="unstyled"
            icon={<CloseOutlineIcon size="md" />}
            onPress={onClose}
          />
        }
      />
      <Box mt={4} flex={1}>
        <Bookmarks
          bookmarks={bookmarks}
          renderItem={({ item, index }: { item: Bookmark; index: number }) => (
            <AudioBookmark
              bookmark={item}
              duration={duration}
              onIconPress={() => {
                removeBookmark(item.id);
              }}
              onPlay={() => {
                goToLocatorAndPlay(item.locator);
                onClose();
              }}
              borderTopWidth={index === 0 ? 1 : 0}
              borderTopRadius={index === 0 ? 8 : 0}
              borderBottomRadius={
                index === (bookmarks || [])?.length - 1 ? 8 : 0
              }
            />
          )}
        />
      </Box>
    </FullScreenModal>
  );
};
