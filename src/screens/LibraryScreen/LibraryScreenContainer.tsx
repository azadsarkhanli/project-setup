import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback } from 'react';
import { useIsConnected } from 'react-native-offline';
import { useSelector } from 'react-redux';

import { track } from '../../common/events';
import { CombinedNavParamList } from '../../common/navigation';
import {
  showNetworkErrorToast,
  useErrorToast,
} from '../../common/useErrorToast';
import { PublicationFragment } from '../../features/catalog/graphql';
import { useBookshelf } from '../../features/catalog/hooks/useBookshelf';
import { allBookshelfByOpenTime } from '../../features/catalog/reducer/bookshelf';

import { LibraryScreen } from './LibraryScreen';

export type LibraryScreenContainerProps = NativeStackScreenProps<
  CombinedNavParamList,
  'Library'
>;

export const LibraryScreenContainer: FC<LibraryScreenContainerProps> = ({
  navigation,
}) => {
  const isConnected = useIsConnected();

  const {
    query: { refetch },
    error,
  } = useBookshelf();
  const items = useSelector(allBookshelfByOpenTime);

  const onPullToRefresh = useCallback(
    async function (done: () => void) {
      if (isConnected) {
        refetch && (await refetch());
      } else {
        showNetworkErrorToast();
      }
      done();
    },
    [isConnected, refetch],
  );

  useErrorToast(error);

  const onItemPress = useCallback(
    (publication: PublicationFragment) => {
      navigation.navigate('Product', { id: publication.id });
      track([
        'book_clicked',
        { book_id: publication.id, tracked_from: 'library' },
      ]);
    },
    [navigation],
  );
  return (
    <LibraryScreen
      items={items}
      onPullToRefresh={onPullToRefresh}
      onItemPress={onItemPress}
    />
  );
};
