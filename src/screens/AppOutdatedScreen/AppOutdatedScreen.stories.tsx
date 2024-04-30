import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { AppOutdatedScreen } from './AppOutdatedScreen';

storiesOf('AppOutdatedScreen', module).add('Default', () => (
  <AppOutdatedScreen onUpdate={action('onUpdate')} />
));
