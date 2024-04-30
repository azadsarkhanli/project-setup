/* eslint-disable @typescript-eslint/no-empty-function */
import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import {
  POPULAR_SEARCHES,
  RECENT_SEARCHES,
  SearchQueryList,
} from './SearchQueryList';

storiesOf('SearchQueryList', module).add('List', () => (
  <Screen pt={8}>
    <VStack space={8}>
      <SearchQueryList
        title="Popular genres"
        queries={POPULAR_SEARCHES}
        onPress={() => {}}
      />
      <SearchQueryList
        title="Recent searches"
        queries={RECENT_SEARCHES}
        onPress={() => {}}
        onClear={() => {}}
      />
    </VStack>
  </Screen>
));
