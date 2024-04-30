import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { makeBooksWithKnobs } from '../../../storybook/mocks/books';
import { ResolvedCmsScreenItems } from '../../features/catalog/types';

import { HomeScreen } from './HomeScreen';

const books = makeBooksWithKnobs();

const items: ResolvedCmsScreenItems = [
  {
    __typename: 'BookshelfScreenItem',
    id: 'test-123',
    title: 'A bookshelf',
    description: 'English description',
    items: books,
    onBookPress: action('bookPress'),
  },
  {
    __typename: 'ScreenItemList',
    id: 'list-123',
    title: 'Our bestsellers',
    description:
      'Lorem ipsum dolor sit amet. Galisum rerum 33 dolorem nihil et sunt beatae et eveniet numquam et quas voluptas vel adipisci porro. ',
    items: books,
    onBookPress: action('listBookPress'),
  },
  {
    __typename: 'ScreenItemList',
    id: 'list-123',
    title: 'Top 5 E-books ',
    description:
      'Lorem ipsum dolor sit amet. Galisum rerum 33 dolorem nihil et sunt beatae et eveniet numquam et quas voluptas vel adipisci porro. ',
    items: books,
    onBookPress: action('listBookPress'),
  },
];

storiesOf('HomeScreen', module)
  .add('Default', () => <HomeScreen items={items} />)
  .add('Loading', () => <HomeScreen items={items} loading />)
  .add('Empty', () => <HomeScreen items={[]} />);
