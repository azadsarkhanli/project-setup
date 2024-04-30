import React, { FC } from 'react';

import { EmptyScreen } from '../../common/components/EmptyScreen';
import { LoadingSpinner } from '../../common/components/LoadingScreen/LoadingSpinner';
import { Screen, ScreenProps } from '../../common/components/Screen';
import { ScreenHeader } from '../../common/components/ScreenHeader';
import { CmsScreen } from '../../features/catalog/components/CmsScreen';
import { ResolvedCmsScreenItems } from '../../features/catalog/types';

type Props = Pick<ScreenProps, 'onPullToRefresh'> & {
  items: ResolvedCmsScreenItems;
  loading?: boolean;
};

export const HomeScreen: FC<Props> = ({ items, onPullToRefresh, loading }) => {
  return (
    <Screen withBottomMenu withoutScroll>
      {!items.length ? (
        loading ? (
          <LoadingSpinner />
        ) : (
          <EmptyScreen />
        )
      ) : (
        <CmsScreen
          header={<ScreenHeader leftLogo mx={0} />}
          items={items}
          onPullToRefresh={onPullToRefresh}
        />
      )}
    </Screen>
  );
};
