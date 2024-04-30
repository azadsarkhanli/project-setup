import { action } from '@storybook/addon-actions';
import { boolean, select, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { ScrollView } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { book, books } from '../../../../utils/mocks/book';
import { PublicationFormat } from '../../graphql';

import { BookCard } from './BookCard';

const coverSelectOptions = {
  portiat: 'https://picsum.photos/200/300.jpg',
  landscape: 'https://picsum.photos/300/200.jpg',
  square: 'https://picsum.photos/200/200.jpg',
};

storiesOf('BookCard', module)
  .add('Knobs', () => (
    <Screen alignItems="center" justifyContent="center">
      <BookCard
        onPress={action('on-press')}
        isStatusSectionVisible={boolean('isStatusSectionVisible', true)}
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
    <Screen alignItems="center" justifyContent="center">
      <ScrollView horizontal p="4">
        {books.map(item => (
          <BookCard
            onPress={action('on-press')}
            isStatusSectionVisible={boolean('isStatusSectionVisible', true)}
            book={item}
            mr="4"
            key={item.id}
          />
        ))}
      </ScrollView>
    </Screen>
  ));
