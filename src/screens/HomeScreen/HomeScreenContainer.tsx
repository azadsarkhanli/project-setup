import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useIsConnected } from 'react-native-offline';

import { sanitySlugs } from '../../app/config';
import { RootStackParamList } from '../../common/navigation';
import {
  showNetworkErrorToast,
  useErrorToast,
} from '../../common/useErrorToast';
import { useResolvedCmsScreen } from '../../features/catalog/hooks/useResolvedCmsScreen';

import { HomeScreen } from './HomeScreen';

export type HomeScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeNavigation'
>;

export const HomeScreenContainer: FC<HomeScreenContainerProps> = () => {
  const { items, loading, refetch, error } = useResolvedCmsScreen(
    sanitySlugs.homeScreen,
  );
  const isConnected = useIsConnected();

  useErrorToast(error);

  const onPullToRefresh = async function (done: () => void) {
    if (isConnected) {
      refetch && (await refetch());
    } else {
      showNetworkErrorToast();
    }
    done();
  };
  return (
    <HomeScreen
      items={items}
      loading={loading}
      onPullToRefresh={onPullToRefresh}
    />
  );
};
