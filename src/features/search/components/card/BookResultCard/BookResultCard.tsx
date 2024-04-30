import { Text, HStack, VStack, Badge, Pressable } from 'native-base';
import React, { useState, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { HitHighlightValues } from 'react-instantsearch-core';

import {
  BookIcon,
  ChevronForwardIcon,
  HeadsetIcon,
} from '../../../../../common/components/icons';
import { TableCellContainer } from '../../../../../common/components/TableCell';
import { highlightAsString, isEmptyHighlight } from '../../../lib/highlight';
import { DigitalContentType } from '../../../lib/searchResultUtil';
import { HighlightTextColor } from '../../HighlightTextColor/HighlightTextColor';

import { ImageContain } from './ImageContain';

type BookResultCardProps = {
  title: HitHighlightValues | string | undefined;
  author: HitHighlightValues | string | undefined;
  price: number | undefined;
  contentTypes?: DigitalContentType[];
  imageUrl?: string;
  language?: string;
  onPress?: () => void;
  showPrice?: boolean;
};

export const BookResultCard: VFC<BookResultCardProps> = props => {
  const {
    title,
    author,
    imageUrl,
    language,
    price,
    contentTypes = [],
    onPress,
    showPrice = true,
  } = props;
  const [centerWidth, setCenterWidth] = useState(0);

  return (
    <Pressable onPress={onPress}>
      <TableCellContainer size="sm">
        <HStack space={4} alignItems="center">
          <CoverImage title={title} imageUrl={imageUrl} />
          <VStack
            flexGrow={1}
            onLayout={e => setCenterWidth(e.nativeEvent.layout.width)}
            // If height is not set on Android, a card can expand to a very large height value if there are multiple
            // cards in a row with no width set.
            maxHeight={centerWidth === 0 ? 20 : 'full'}
          >
            <HighlightTextColor
              maxW={centerWidth}
              fontSize="md"
              fontWeight={500}
              highlightColor={null}
              highlightValues={title}
            />

            <AuthorLanguageLine
              author={author}
              language={language}
              maxWidth={centerWidth}
            />
            <DigitalContentButtonLine
              price={price}
              contentTypes={contentTypes}
              showPrice={showPrice}
            />
          </VStack>
          <ChevronForwardIcon color="muted.500" size="md" />
        </HStack>
      </TableCellContainer>
    </Pressable>
  );
};

const CoverImage = ({
  imageUrl,
  title,
}: {
  title: HitHighlightValues | string | undefined;
  imageUrl: string | undefined;
}) => {
  const { t } = useTranslation('search');

  return (
    <ImageContain
      imageUrl={imageUrl}
      alt={highlightAsString(title) ?? t('bookResultCard.noTitle')}
      width="58px"
      height="88px"
      rounded="4"
      alignItems="center"
    />
  );
};

const AuthorLanguageLine = ({
  author,
  maxWidth,
  language,
}: {
  author: HitHighlightValues | string | undefined;
  maxWidth: number;
  language?: string;
}) => {
  const isEmptyAuthor = isEmptyHighlight(author);

  if (isEmptyAuthor && !language) {
    return null;
  }
  const languageElement = language ? (
    <Text
      mt={isEmptyAuthor ? 0.5 : 0}
      maxW={maxWidth}
      variant="xs"
      color={'muted.500'}
      _dark={{ color: 'muted.600' }}
    >
      {!isEmptyAuthor && ' · '}
      {language}
    </Text>
  ) : null;

  return !isEmptyAuthor ? (
    <HighlightTextColor
      mt={0.5}
      maxW={maxWidth}
      variant="xs"
      color={'muted.500'}
      _dark={{ color: 'muted.500' }}
      highlightColor={null}
      highlightValues={author}
      separator={', '}
    >
      {languageElement}
    </HighlightTextColor>
  ) : (
    languageElement
  );
};

const DigitalContentButtonLine = ({
  contentTypes,
  price,
  showPrice,
}: {
  contentTypes: DigitalContentType[];
  price: number | undefined;
  showPrice?: boolean;
}) => {
  if (contentTypes.length === 0) {
    return null;
  }

  return (
    <HStack mt={2} space={2}>
      {contentTypes.map((type, index) => (
        <DigitalContentButton
          key={index}
          price={price}
          contentType={type}
          showPrice={showPrice}
        />
      ))}
    </HStack>
  );
};

const DigitalContentButton = ({
  price,
  contentType,
  showPrice,
}: {
  price: number | undefined;
  contentType: DigitalContentType;
  showPrice?: boolean;
}) => {
  const StartIcon = getIcon(contentType);

  // TODO add number format for ios/android as part of i18n
  const priceAsString =
    price === undefined || !showPrice ? null : `${price.toFixed(2)} kr`;

  return (
    <Badge variant="solid" colorScheme="secondary">
      <StartIcon
        size="xs"
        py="2"
        mr={priceAsString ? '1' : '0'}
        color="muted.50"
      />
      {priceAsString}
    </Badge>
  );
};

const getIcon = (contentType: DigitalContentType) => {
  switch (contentType) {
    case 'ebook':
      return BookIcon;
    case 'audiobook':
      return HeadsetIcon;
  }
};
