import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { ProductDownload } from './ProductDownload';

storiesOf('ProductDownload', module).add('Knobs', () => (
  <Screen p="4">
    <ProductDownload
      cancel={action('cancel')}
      download={action('download')}
      downloadProgress={number('progress', 0)}
      removeFile={action('removeFile')}
      fileStatus={select(
        'fileStatus',
        {
          checking: 'checking',
          downloading: 'downloading',
          offline: 'offline',
          online: 'online',
        },
        'online',
      )}
      isAudiobook={boolean('isAudiobook', false)}
    />
  </Screen>
));
