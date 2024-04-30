import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { RegistrationConfirmation } from './RegistrationConfirmation';

storiesOf('RegistrationConfirmation', module)
  .add('Default', () => (
    <RegistrationConfirmation
      openNextSlide={action('openNextSlide')}
      onDismiss={action('onDismiss')}
    />
  ))
  .add('NoNextSlide', () => (
    <RegistrationConfirmation onDismiss={action('onDismiss')} />
  ));
