import { Text, Box, Pressable, IBoxProps, HStack, VStack } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TableCellContainer } from '../../../../common/components/TableCell';
import { ImageContain } from '../../../search/components/card/BookResultCard/ImageContain';
import { ResolvedPublication } from '../../types';
import { BookBadges } from '../BookCard/BookBadges';
import { BookProgress } from '../BookCard/BookProgress';

export type LibraryItemProps = IBoxProps & {
  book: ResolvedPublication;
  onPress: () => void;
  onDownload?: () => void;
  onRemoveFromDevice?: () => void;
};

export const LibraryItem: FC<LibraryItemProps> = ({
  book,
  onPress,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  const { thumbnailUri, title } = book;

  const isProgressVisible =
    book.isDownloaded || (book.progress !== undefined && book.progress <= 1);

  return (
    <Box {...props}>
      <Pressable
        onPress={onPress}
        accessibilityLabel={t('bookCard.label', { title: book.title })}
      >
        <TableCellContainer size="sm">
          <HStack space={4} alignItems="center">
            <ImageContain
              imageUrl={thumbnailUri ?? undefined}
              alt={title}
              width="42px"
              height="64px"
              rounded="4"
              alignItems="center"
            />
            <VStack flexGrow={1} flexShrink={1}>
              <Text variant="md" fontWeight={500} noOfLines={2}>
                {book.title}
              </Text>
              <Text
                fontSize="xs"
                noOfLines={2}
                color="muted.500"
                _dark={{ color: 'secondary.500' }}
              >
                {book.authorsFormatted}
              </Text>
              {isProgressVisible ? (
                <BookProgress book={book} maxWidth="32" />
              ) : (
                <BookBadges
                  book={book}
                  withFormatIcons
                  direction="row"
                  mt={2}
                />
              )}
            </VStack>
          </HStack>
        </TableCellContainer>
      </Pressable>
    </Box>
  );
};
