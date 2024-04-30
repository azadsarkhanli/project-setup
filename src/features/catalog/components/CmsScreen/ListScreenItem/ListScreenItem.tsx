import { Box, Link, Row, Text } from 'native-base';
import React, { FC } from 'react';

import { BaseBook } from '../../../types';
import { BookSlider } from '../../BookSlider';

export type ListScreenItemProps = {
  items: Array<BaseBook>;
  title: string;
  description?: string;
  onBookPress?: (book: BaseBook) => void;
  callToAction?: {
    label: string;
    onPress?: () => void;
  };
};

export const ListScreenItem: FC<ListScreenItemProps> = ({
  items = [],
  title,
  description,
  onBookPress,
  callToAction,
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <Box py={8}>
      <Row justifyContent="space-between" alignItems="center" mb={2}>
        <Text variant="h4">{title}</Text>
        {callToAction && (
          <Link
            onPress={callToAction.onPress}
            _text={{
              variant: 'sm',
              color: 'secondary.600',
              _dark: { color: 'secondary.600' },
            }}
          >
            {callToAction.label}
          </Link>
        )}
      </Row>
      {description && (
        <Text variant="sm" color="muted.500" _dark={{ color: 'muted.300' }}>
          {description}
        </Text>
      )}
      <BookSlider items={items} onPress={onBookPress} mx={-6} mt={4} />
    </Box>
  );
};
