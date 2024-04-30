import { boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../Screen';

import { Slider } from './Slider';

storiesOf('Slider', module).add('Default', () => {
  return (
    <Screen alignItems="center" justifyContent="center" p="4">
      <Slider
        minValue={number('minValue', 0)}
        maxValue={number('maxValue', 10)}
        step={number('step', 1)}
        colorScheme="secondary"
        size={select('size', ['sm', 'md', 'lg'], 'md')}
        hasSteps={boolean('hasSteps', true)}
        hasTrack={boolean('hasTrack', true)}
        hasFilledTrack={boolean('hasFilledTrack', true)}
      />
    </Screen>
  );
});
