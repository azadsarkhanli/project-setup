import { Box, Button, HStack, IconButton, Text, VStack } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FullScreenModal } from '../../../../common/components/FullScreenModal';
import {
  BookmarkIcon,
  CloseOutlineIcon,
} from '../../../../common/components/icons';
import { ScreenHeader } from '../../../../common/components/ScreenHeader';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';
import { track } from '../../../../common/events';
import { Bookmark } from '../../../../features/catalog/types';
import { Bookmarks } from '../../../common/components/Bookmarks';
import { ReaderContext, useReaderContext } from '../../context/ReaderContext';

import { TableOfContents } from './TableOfContents';

export type ReaderOutlineProps = {
  isOpen?: boolean;
  onClose: () => void;
};

type Tabs = 'ToC' | 'Bookmarks';

export const ReaderOutline: FC<ReaderOutlineProps> = ({ isOpen, onClose }) => {
  const context = useReaderContext();
  const { t } = useTranslation('reader');

  const [tab, setTab] = useState<Tabs>('ToC');

  const onBookmarkPress = (item: Bookmark) => {
    context.goToLocator(item.locator);
    onClose();
  };

  const onBookmarkRemove = (item: Bookmark) => {
    context.removeBookmark(item.id);
  };

  useEffect(() => {
    if (isOpen) {
      if (tab === 'ToC') {
        track(['reader_table_of_contents_opened']);
      } else {
        track(['reader_bookmarks_opened']);
      }
    }
  }, [isOpen, tab]);

  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose}>
      <ReaderContext.Provider value={context}>
        <VStack space={4} flex={1}>
          <ScreenHeader
            rightContent={
              <IconButton
                colorScheme="primary"
                variant="unstyled"
                icon={<CloseOutlineIcon size="md" />}
                onPress={onClose}
              />
            }
          />
          <HStack space="2" mx="4">
            <Button
              variant={tab === 'ToC' ? 'solid' : 'outline'}
              colorScheme="secondary"
              size="sm"
              flex={1}
              onPress={() => setTab('ToC')}
            >
              {t('readerMenu.outline.tabTableOfContents')}
            </Button>
            <Button
              variant={tab === 'Bookmarks' ? 'solid' : 'outline'}
              colorScheme="secondary"
              flex={1}
              size="sm"
              onPress={() => setTab('Bookmarks')}
            >
              {t('readerMenu.outline.tabBookmarks')}
            </Button>
          </HStack>
          <Box flex={1}>
            {tab === 'ToC' && <TableOfContents onClose={onClose} />}
            {tab === 'Bookmarks' && (
              <Bookmarks
                bookmarks={context.bookmarks}
                renderItem={({
                  item,
                  index,
                }: {
                  item: Bookmark;
                  index: number;
                }) => (
                  <TableCellLink
                    variant="outline"
                    size="md"
                    leftContent={
                      <IconButton
                        colorScheme="primary"
                        variant="unstyled"
                        icon={<BookmarkIcon size="md" />}
                        onPress={() => onBookmarkRemove(item)}
                      />
                    }
                    onPress={() => onBookmarkPress(item)}
                    rightContent={
                      item.locator.locations?.position && (
                        <Text variant="md" fontWeight="500" color="muted.500">
                          {item.locator.locations?.position}
                        </Text>
                      )
                    }
                    title={item?.locator?.snippet || ''}
                    _title={{ numberOfLines: 4 }}
                    subtitle={t('readerMenu.outline.bookmarks.createdAt', {
                      date: new Date(item.createdAt),
                    })}
                    borderTopWidth={index === 0 ? 1 : 0}
                    borderTopRadius={index === 0 ? 8 : 0}
                    borderBottomRadius={
                      index === (context.bookmarks || [])?.length - 1 ? 8 : 0
                    }
                  />
                )}
              />
            )}
          </Box>
        </VStack>
      </ReaderContext.Provider>
    </FullScreenModal>
  );
};
