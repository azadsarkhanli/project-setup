import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { ProductPurchase } from './ProductPurchase';

storiesOf('ProductPurchase', module).add('Knobs', () => (
  <Screen p="4">
    <ProductPurchase onPress={action('onPress')} />
  </Screen>
));
