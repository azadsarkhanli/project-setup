import { number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Box } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { PublicationFormat } from '../../graphql';

import { CoverImage } from './CoverImage';

const coverSelectOptions = {
  portiat: 'https://picsum.photos/200/300.jpg',
  landscape: 'https://picsum.photos/300/200.jpg',
  square: 'https://picsum.photos/200/200.jpg',
};

const formats = {
  audiobook: PublicationFormat.Audiobook,
  ebook: PublicationFormat.Ebook,
};

storiesOf('CoverImage', module).add('Knobs', () => (
  <Screen alignItems="center" justifyContent="center">
    <Box width={number('width', 200)}>
      <CoverImage
        book={{
          title: 'Destination Unknown',
          thumbnailUri: select(
            'thumbnailUri',
            coverSelectOptions,
            coverSelectOptions.portiat,
          ),
          format: select('format', formats, formats.ebook),
        }}
      />
    </Box>
  </Screen>
));
