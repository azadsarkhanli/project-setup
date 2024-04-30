import { Divider, FlatList, VStack } from 'native-base';
import { IFlatListProps } from 'native-base/lib/typescript/components/basic/FlatList/types';
import React, { FC, useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';

import { ResolvedCmsScreenItems } from '../../types';

import { ListScreenItem } from './ListScreenItem';

export const SCROLLVIEW_CONTAINER_STYLE = {
  paddingLeft: 16,
  paddingRight: 16,
};

export type CmsScreenProps = {
  header?: IFlatListProps['ListHeaderComponent'];
  items: ResolvedCmsScreenItems;
  onPullToRefresh?: (finishCallback: () => void) => void;
};

const filterItems = (items: ResolvedCmsScreenItems): ResolvedCmsScreenItems =>
  items.filter(item =>
    ['BookshelfScreenItem', 'ScreenItemList'].includes(item.__typename),
  );

export const CmsScreen: FC<CmsScreenProps> = ({
  header,
  items = [],
  onPullToRefresh,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const supportedItems = useMemo(() => filterItems(items), [items]);

  if (supportedItems.length === 0) {
    return null;
  }

  function startRefreshing() {
    setRefreshing(true);
    onPullToRefresh && onPullToRefresh(stopRefreshing);
  }

  function stopRefreshing() {
    setRefreshing(false);
  }

  return (
    <VStack flex={1}>
      <FlatList
        data={supportedItems}
        ListHeaderComponent={header}
        refreshControl={
          onPullToRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={startRefreshing}
            />
          )
        }
        contentContainerStyle={SCROLLVIEW_CONTAINER_STYLE}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          switch (item.__typename) {
            case 'BookshelfScreenItem':
            case 'ScreenItemList':
              return (
                <ListScreenItem
                  key={item.id}
                  items={item.items}
                  onBookPress={item.onBookPress}
                  title={item.title}
                  description={item.description}
                />
              );
            default:
              return null;
          }
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </VStack>
  );
};
