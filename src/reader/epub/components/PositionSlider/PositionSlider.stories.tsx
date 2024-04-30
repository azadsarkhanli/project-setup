import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { locator } from '../../../../utils/mocks/book';

import { PositionSlider } from './PositionSlider';

storiesOf('PositionSlider', module).add('Default', () => (
  <Screen p="4">
    <PositionSlider
      goToLocator={action('goToLocator')}
      position={number('position', 2)}
      positions={[locator, locator, locator, locator, locator]}
    />
  </Screen>
));
