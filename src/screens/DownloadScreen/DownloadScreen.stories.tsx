import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { publicationFragment } from '../../utils/mocks/book';

import { DownloadScreen } from './DownloadScreen';

storiesOf('DownloadScreen', module).add('knobs', () => (
  <DownloadScreen
    book={publicationFragment}
    onDownload={action('download')}
    onGoBack={action('goBack')}
    fileStatus={select(
      'fileStatus',
      ['checking', 'offline', 'downloading', 'online'],
      'online',
    )}
    downloadProgress={number('progress', 0.22)}
  />
));
