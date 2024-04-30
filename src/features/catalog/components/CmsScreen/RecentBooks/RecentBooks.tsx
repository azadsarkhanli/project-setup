import { Box, Link, Row, Text } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseBook } from '../../../types';
import { BookSlider } from '../../BookSlider';

export type RecentBooksProps = {
  items: Array<BaseBook>;
  title: string;
  description?: string;
  onBookPress?: (book: BaseBook) => void;
  onGoToBookshelf?: () => void;
};

export const RecentBooks: FC<RecentBooksProps> = ({
  items = [],
  title,
  description,
  onBookPress,
  onGoToBookshelf,
}) => {
  const { t } = useTranslation('catalog');

  if (items.length === 0) {
    return null;
  }
  return (
    <Box borderColor="secondary.700" borderBottomWidth={0.5} mx={4} py={4}>
      <Row justifyContent="space-between" alignItems="center" mb={4}>
        <Text variant="md" fontWeight={500}>
          {title}
        </Text>
        <Link
          onPress={onGoToBookshelf}
          _text={{
            variant: 'sm',
            color: 'secondary.600',
            _dark: { color: 'secondary.600' },
          }}
        >
          {t('homeScreen.recentBooks.bookshelfLink')}
        </Link>
      </Row>
      {description && (
        <Text variant="sm" color="muted.300" _dark={{ color: 'muted.300' }}>
          {description}
        </Text>
      )}
      <BookSlider items={items} onPress={onBookPress} mx={-6} mt={4} />
    </Box>
  );
};
