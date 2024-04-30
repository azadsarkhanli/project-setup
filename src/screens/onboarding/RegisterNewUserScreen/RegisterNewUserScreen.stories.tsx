import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { initialValues } from '../../../features/onboarding/lib/useUserInfoForm';

import { RegisterNewUserScreen } from './RegisterNewUserScreen';

storiesOf('RegisterNewUserScreen', module).add('Default', () => (
  <RegisterNewUserScreen
    formData={initialValues}
    onGoBack={action('onGoBack')}
    onSubmit={action('onSubmit')}
  />
));
