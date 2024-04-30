import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { LoginScreen } from './LoginScreen';

storiesOf('LoginScreen', module).add('Default', () => (
  <LoginScreen onGoBack={action('onGoBack')} onSubmit={action('onSubmit')} />
));
