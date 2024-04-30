import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../Screen';

import Progress from './Progress';

storiesOf('Progress', module).add('Knobs', () => (
  <Screen alignItems="center" justifyContent="center" p="4">
    <Progress
      progress={number('progress', 0.5)}
      showPercentage={boolean('showPercentage', true)}
    />
  </Screen>
));
