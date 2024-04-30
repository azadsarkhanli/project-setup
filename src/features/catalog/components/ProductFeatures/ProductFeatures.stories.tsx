import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { productBundle } from '../../../../utils/mocks/productBundle';

import { ProductFeatures } from './ProductFeatures';

storiesOf('ProductFeatures', module)
  .add('Audiobook', () => (
    <Screen p="4">
      <ProductFeatures metadata={productBundle.products[1].metadata} />
    </Screen>
  ))
  .add('eBook', () => (
    <Screen p="4">
      <ProductFeatures metadata={productBundle.products[0].metadata} />
    </Screen>
  ));
