import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { PublicationFormat } from '../../graphql';

import { ProductOpenButton } from './ProductOpenButton';

storiesOf('ProductOpenButton', module)
  .add('Audiobook', () => (
    <Screen p="4">
      <ProductOpenButton
        format={PublicationFormat.Audiobook}
        onPress={action('onPress')}
      />
    </Screen>
  ))
  .add('Ebook', () => (
    <Screen p="4">
      <ProductOpenButton
        format={PublicationFormat.Ebook}
        onPress={action('onPress')}
      />
    </Screen>
  ));
