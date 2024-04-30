import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { manifest, positions } from '../../../../utils/mocks/readium';
import { StorybookReaderProvider } from '../../context/StorybookReaderProvider';

import { EpubReaderMenu } from './EpubReaderMenu';

storiesOf('EpubReaderMenu', module).add('Default', () => (
  <StorybookReaderProvider manifest={manifest} positions={positions}>
    <Screen background="reader">
      <EpubReaderMenu onGoBack={action('onGoBack')} />
    </Screen>
  </StorybookReaderProvider>
));
