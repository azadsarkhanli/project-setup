import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { ProductGenres } from './ProductGenres';

storiesOf('ProductGenres', module).add('Knobs', () => (
  <Screen p="4">
    <ProductGenres
      genres={['Fantasy', 'Natur', 'Dokumentar', 'Familie og helse']}
    />
  </Screen>
));
