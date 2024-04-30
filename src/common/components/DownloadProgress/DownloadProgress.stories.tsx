import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../Screen';

import { DownloadProgress } from './DownloadProgress';

storiesOf('DownloadProgress', module).add('Knobs', () => (
  <Screen alignItems="center" justifyContent="center" p="4">
    <DownloadProgress
      progress={number('DownloadProgress', 0.5)}
      showPercentage={boolean('showPercentage', true)}
    />
  </Screen>
));
