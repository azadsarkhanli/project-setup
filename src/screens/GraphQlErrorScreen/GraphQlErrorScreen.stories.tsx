import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { graphQlError, networkError } from '../../common/utils/graphQlErrors';

import { GraphQlErrorScreen } from './GraphQlErrorScreen';

storiesOf('GraphQlErrorScreen', module)
  .add('Network error', () => (
    <GraphQlErrorScreen
      error={networkError('Test')}
      onRestart={action('onRestart')}
      onTryAgain={action('onTryAgain')}
      onClearDataAndRestart={action('onClearDataAndRestart')}
    />
  ))
  .add('Server error', () => (
    <GraphQlErrorScreen
      error={graphQlError('ServerError', 'Test')}
      onRestart={action('onRestart')}
      onTryAgain={action('onTryAgain')}
      onClearDataAndRestart={action('onClearDataAndRestart')}
    />
  ));
