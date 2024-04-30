import { Text, Box, Pressable, IBoxProps, VStack } from 'native-base';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PublicationFormat } from '../../graphql';
import { ResolvedPublication } from '../../types';
import { CoverImage } from '../CoverImage';

import { BookBadges } from './BookBadges';
import { BookProgress } from './BookProgress';

export type BookCardProps = IBoxProps & {
  book: ResolvedPublication;
  isStatusSectionVisible?: boolean;
  onPress: () => void;
  onDownload?: () => void;
  onRemoveFromDevice?: () => void;
};

const HEIGHT = 176;

export const BookCard: FC<BookCardProps> = ({
  book,
  isStatusSectionVisible,
  onPress,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  const [width, setWidth] = useState(
    book.format === PublicationFormat.Audiobook ? 176 : 117,
  );

  const isProgressVisible =
    book.isDownloaded || (book.progress !== undefined && book.progress <= 1);

  const handleRatioChange = useCallback((ratio: number) => {
    setWidth(ratio * HEIGHT);
  }, []);

  return (
    <Box {...props}>
      <Pressable
        onPress={onPress}
        accessibilityLabel={t('bookCard.label', { title: book.title })}
      >
        <Box>
          <CoverImage
            book={book}
            height={`${HEIGHT}px`}
            onRatioChange={handleRatioChange}
          />
          <BookBadges
            book={book}
            withFormatIcons={!isProgressVisible}
            direction="column"
            position="absolute"
            bottom="2"
            left="2"
            space="2"
            alignItems="flex-start"
          />
        </Box>
        {isStatusSectionVisible && (
          <BookStatusSection
            book={book}
            isProgressVisible={isProgressVisible}
            width={width}
          />
        )}
      </Pressable>
    </Box>
  );
};

export type BookMetaInfoProps = IBoxProps & {
  book: BookCardProps['book'];
  isProgressVisible?: boolean;
  width: number;
};

export const BookStatusSection: FC<BookMetaInfoProps> = ({
  book,
  isProgressVisible,
  width,
  ...props
}) => {
  return (
    <Box {...props} testID="bookStatusSectionContainer" width={`${width}px`}>
      {isProgressVisible && <BookProgress book={book} />}
      <VStack mt="2">
        <Text variant="sm" fontWeight={500} noOfLines={2} testID="bookTitle">
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
      </VStack>
    </Box>
  );
};
