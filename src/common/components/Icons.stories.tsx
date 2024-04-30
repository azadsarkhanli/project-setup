import { storiesOf } from '@storybook/react-native';
import { HStack, VStack } from 'native-base';
import React from 'react';

import * as components from './icons';
import { Screen } from './Screen';

storiesOf('Icons', module).add('Default', () => (
  <Screen>
    <VStack space={4} p={8} alignItems="center">
      {Object.entries(components).map(([key, Component]) => {
        return (
          <HStack key={key} space={2} alignItems="center">
            {['black', 'primary.600'].map(color =>
              ['sm', 'md'].map(size => (
                <Component key={`${color}_${size}`} color={color} size={size} />
              )),
            )}
          </HStack>
        );
      })}
    </VStack>
  </Screen>
));
