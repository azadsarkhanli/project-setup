import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { makePublicationFragments } from '../../../storybook/mocks/books';
import { PublicationFragment } from '../../features/catalog/graphql';

import { LibraryScreen } from './LibraryScreen';

const items: PublicationFragment[] = makePublicationFragments(20);

storiesOf('LibraryScreen', module)
  .add('Default', () => (
    <LibraryScreen items={items} onItemPress={action('onItemPress')} />
  ))
  .add('Empty', () => (
    <LibraryScreen items={[]} onItemPress={action('onItemPress')} />
  ));
