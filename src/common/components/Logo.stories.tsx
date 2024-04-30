import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React from 'react';

import * as components from './logo';
import { Screen } from './Screen';

storiesOf('Logo', module).add('Default', () => (
  <Screen>
    <VStack space={2} p={8} alignItems="center">
      {Object.entries(components).map(([key, Component]) => {
        return <Component key={key} />;
      })}
    </VStack>
  </Screen>
));
