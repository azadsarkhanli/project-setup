import { Box, FlatList, Text } from 'native-base';
import { IFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Bookmark } from '../../../../features/catalog/types';
import { SCROLLVIEW_CONTAINER_STYLE } from '../../../epub/components/ReaderOutline/utils';

type BookmarksProps = {
  bookmarks?: Bookmark[];
} & Pick<
  IFlatListProps,
  'ListHeaderComponent' | 'ItemSeparatorComponent' | 'renderItem'
>;

const EmptyComponent = () => {
  const { t } = useTranslation('reader');

  return (
    <Box bg="muted.50" borderRadius="xl" px="8" py="6">
      <Text variant="h4" textAlign="center">
        {t('bookmarks.empty')}
      </Text>
    </Box>
  );
};

export const Bookmarks: FC<BookmarksProps> = ({
  bookmarks,
  ListHeaderComponent,
  ItemSeparatorComponent,
  renderItem,
}) => {
  return (
    <FlatList
      contentContainerStyle={SCROLLVIEW_CONTAINER_STYLE}
      data={bookmarks || []}
      ListEmptyComponent={EmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};
