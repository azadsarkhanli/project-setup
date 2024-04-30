import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { ProductDescription } from './ProductDescription';

storiesOf('ProductDescription', module).add('Default', () => (
  <Screen p="4">
    <ProductDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat leo sed sapien ultrices, id lobortis lacus tristique. Proin a odio et nulla sodales mollis quis et felis. Curabitur ligula est, bibendum vel massa at, commodo venenatis sapien. Donec faucibus fermentum ex, et varius massa mollis nec. In hac habitasse platea dictumst. Etiam eu varius erat, et hendrerit eros. Nunc laoreet bibendum maximus." />
  </Screen>
));
