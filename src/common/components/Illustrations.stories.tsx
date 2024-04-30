import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React from 'react';

import * as components from './illustrations';
import { Screen } from './Screen';

storiesOf('Illustrations', module).add('Default', () => (
  <Screen>
    <VStack space={2} p={8} alignItems="center">
      {Object.entries(components).map(([key, Component]) => {
        return <Component key={key} width="200" height="200" />;
      })}
    </VStack>
  </Screen>
));
