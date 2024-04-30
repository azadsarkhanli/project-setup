import { FlatList, Spacer } from 'native-base';
import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RefreshControl } from 'react-native';

import { EmptyScreen } from '../../common/components/EmptyScreen';
import { Screen, ScreenProps } from '../../common/components/Screen';
import { ScreenHeader } from '../../common/components/ScreenHeader';
import { PublicationFormat } from '../../common/graphql';
import { LibraryFilters } from '../../features/catalog/components/LibraryFilters.tsx';
import { useContainerContext } from '../../features/catalog/context/ContainerContext';
import { PublicationFragment } from '../../features/catalog/graphql';

export type LibraryScreenProps = ScreenProps & {
  items: PublicationFragment[];
  onItemPress: (item: PublicationFragment) => void;
};

export const SCROLLVIEW_CONTAINER_STYLE = {
  paddingTop: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 24,
};

export const LibraryScreen: FC<LibraryScreenProps> = ({
  items,
  onItemPress,
  onPullToRefresh,
  ...props
}) => {
  const { t } = useTranslation('catalog');
  const { LibraryItem } = useContainerContext();
  const [activeFilter, setActiveFilter] = useState<PublicationFormat | null>(
    null,
  );

  const filteredItems = useMemo(() => {
    if (!activeFilter) {
      return items;
    }
    return items.filter(
      // simplify filter when type is set on PublicationFragment
      i =>
        (activeFilter === PublicationFormat.Audiobook &&
          i.__typename === 'AudiobookPublication') ||
        (activeFilter === PublicationFormat.Ebook &&
          i.__typename === 'EbookPublication'),
    );
  }, [activeFilter, items]);

  const [refreshing, setRefreshing] = useState(false);
  function startRefreshing() {
    setRefreshing(true);
    onPullToRefresh && onPullToRefresh(stopRefreshing);
  }
  function stopRefreshing() {
    setRefreshing(false);
  }

  return (
    <Screen
      header={
        <ScreenHeader
          title={t('libraryScreen.title')}
          subtitle={t('libraryScreen.subtitle', { count: items.length })}
        />
      }
      withBottomMenu
      withoutScroll
      {...props}
    >
      {items.length > 0 ? (
        <>
          <LibraryFilters
            mt={4}
            mx={4}
            mb={2}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
          <FlatList
            flex={1}
            refreshControl={
              onPullToRefresh && (
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={startRefreshing}
                />
              )
            }
            contentContainerStyle={SCROLLVIEW_CONTAINER_STYLE}
            data={filteredItems}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <Spacer h={2} />}
            renderItem={({ item }) => (
              <LibraryItem book={item} onPress={() => onItemPress(item)} />
            )}
          />
        </>
      ) : (
        <EmptyScreen />
      )}
    </Screen>
  );
};
