import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { productBundle } from '../../utils/mocks/productBundle';

import { ProductScreen } from './ProductScreen';

storiesOf('ProductScreen', module).add('Default', () => (
  <ProductScreen
    productBundle={productBundle}
    downloadProps={{
      cancel: action('cancel'),
      download: action('download'),
      downloadProgress: number('progress', 0),
      removeFile: action('removeFile'),
      fileStatus: select(
        'fileStatus',
        {
          checking: 'checking',
          downloading: 'downloading',
          offline: 'offline',
          online: 'online',
        },
        'online',
      ),
    }}
  />
));
