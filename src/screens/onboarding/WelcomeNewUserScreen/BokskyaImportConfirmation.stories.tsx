import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { BokskyaImportConfirmation } from './BokskyaImportConfirmation';

storiesOf('BokskyaImportConfirmation', module).add('Default', () => (
  <BokskyaImportConfirmation
    numberOfBooks={number('numberOfBooks', 5)}
    onDismiss={action('onDismiss')}
  />
));
