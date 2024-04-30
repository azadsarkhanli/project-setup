import { action } from '@storybook/addon-actions';
import { boolean, select, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { VStack } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { book, books } from '../../../../utils/mocks/book';
import { PublicationFormat } from '../../graphql';

import { LibraryItem } from './LibraryItem';

const coverSelectOptions = {
  portiat: 'https://picsum.photos/200/300.jpg',
  landscape: 'https://picsum.photos/300/200.jpg',
  square: 'https://picsum.photos/200/200.jpg',
};

storiesOf('LibraryItem', module)
  .add('Knobs', () => (
    <Screen justifyContent="center" p={4}>
      <LibraryItem
        onPress={action('on-press')}
        book={{
          ...book,
          title: text('title', book.title),
          authorsFormatted: text('author', book.authorsFormatted),
          format: select(
            'format',
            [PublicationFormat.Ebook, PublicationFormat.Audiobook],
            PublicationFormat.Ebook,
          ),
          thumbnailUri: select(
            'thumbnailUri',
            coverSelectOptions,
            coverSelectOptions.portiat,
          ),
          isNew: boolean('isNew', true),
          isDownloaded: boolean('isDownloaded', true),
          isOwned: boolean('isOwned', true),
          progress: boolean('no progress', false)
            ? undefined
            : number('progress', 0.22),
        }}
      />
    </Screen>
  ))
  .add('List', () => (
    <Screen>
      <VStack space={2} p={4}>
        {books.map(item => (
          <LibraryItem onPress={action('on-press')} book={item} key={item.id} />
        ))}
      </VStack>
    </Screen>
  ));
