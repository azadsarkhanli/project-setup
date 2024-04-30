import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { ProductModal } from './ProductModal';

storiesOf('ProductModal', module).add('default', () => (
  <ProductModal
    onOpen={action('on-read')}
    publication={{
      id: '1',
      title: text('Publication title', 'Book 01'),
      author: text('Publication author', 'Author 01'),
    }}
  />
));
