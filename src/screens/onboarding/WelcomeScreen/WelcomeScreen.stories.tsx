import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { WelcomeScreen } from './WelcomeScreen';

storiesOf('WelcomeScreen', module)
  .add('Default', () => (
    <WelcomeScreen
      onLogin={action('onLogin')}
      onRegister={action('onRegister')}
    />
  ))
  .add('LoginOnly', () => <WelcomeScreen onLogin={action('onLogin')} />);
