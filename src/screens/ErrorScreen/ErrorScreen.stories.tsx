import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { ErrorScreen } from './ErrorScreen';

storiesOf('ErrorScreen', module).add('Default', () => (
  <ErrorScreen
    onRestart={action('onRestart')}
    onTryAgain={action('onTryAgain')}
    onClearDataAndRestart={action('onClearDataAndRestart')}
  />
));
