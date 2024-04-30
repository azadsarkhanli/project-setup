import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { makeBooksWithKnobs } from '../../../../../../storybook/mocks/books';
import { Screen } from '../../../../../common/components/Screen';

import { RecentBooks } from './RecentBooks';

const items = makeBooksWithKnobs();

storiesOf('RecentBooks', module)
  .add('Empty', () => (
    <Screen>
      <RecentBooks items={[]} title="Your content" />
    </Screen>
  ))
  .add('List', () => {
    return (
      <Screen>
        <RecentBooks
          items={items}
          onBookPress={action('on-book-press')}
          title={text('title', 'Your content')}
          description={text('description', 'Pick up where you left off')}
        />
      </Screen>
    );
  });
