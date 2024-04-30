import { FlatList, Spacer } from 'native-base';
import React, { VFC } from 'react';
import { InfiniteHitsProvided } from 'react-instantsearch-core';
import { connectInfiniteHits } from 'react-instantsearch-native';
import { StyleProp, ViewStyle } from 'react-native';

import { ArkHit } from '../../model/SearchResult';
import ConnectedBookResultCard from '../card/BookResultCard/ConnectedBookResultCard';

interface InfiniteHitsProps extends InfiniteHitsProvided<ArkHit> {
  style?: StyleProp<ViewStyle> | undefined;
}

const InfiniteHits: VFC<InfiniteHitsProps> = props => {
  const { style, hits, hasMore, refineNext } = props;

  return (
    <FlatList
      flex={1}
      contentContainerStyle={style}
      data={hits}
      keyExtractor={item => item.objectID}
      ItemSeparatorComponent={() => <Spacer h={2} />}
      onEndReached={() => hasMore && refineNext()}
      renderItem={({ item }) => (
        <ConnectedBookResultCard arkHit={item as ArkHit} />
      )}
    />
  );
};

export default connectInfiniteHits(InfiniteHits);
