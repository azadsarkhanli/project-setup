import { ScrollView, IBoxProps, Box, HStack } from 'native-base';
import React, { FC, ReactElement } from 'react';

import { useContainerContext } from '../../context/ContainerContext';
import { BaseBook } from '../../types';
import { BookCardProps } from '../BookCard';

export type BookSliderProps = IBoxProps &
  Pick<BookCardProps, 'isStatusSectionVisible'> & {
    items: Array<BaseBook>;
    emptyContainer?: ReactElement;
    onPress?: (book: BaseBook) => void;
  };

export const BookSlider: FC<BookSliderProps> = ({
  items = [],
  emptyContainer,
  onPress,
  isStatusSectionVisible = true,
  ...props
}) => {
  const { BookCard } = useContainerContext();

  if (items.length === 0) {
    return emptyContainer || null;
  }

  const createOnPress = (book: BaseBook) => () => onPress && onPress(book);

  return (
    <Box {...props}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space="4" pl="6" pr="6">
          {items.map((item, index) => (
            <BookCard
              key={`item-${index}`}
              book={item}
              isStatusSectionVisible={isStatusSectionVisible}
              onPress={createOnPress(item)}
            />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
};
