import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { makeBooksWithKnobs } from '../../../../../../storybook/mocks/books';
import { Screen } from '../../../../../common/components/Screen';

import { ListScreenItem } from './ListScreenItem';

const items = makeBooksWithKnobs();

storiesOf('ListScreenItem', module)
  .add('Empty', () => (
    <Screen>
      <ListScreenItem items={[]} title="Your content" />
    </Screen>
  ))
  .add('List', () => {
    return (
      <Screen>
        <ListScreenItem
          items={items}
          onBookPress={action('on-book-press')}
          title={text('title', 'Your content')}
          description={text('description', 'Pick up where you left off')}
          callToAction={
            boolean('call to action', true)
              ? {
                  onPress: action('on-call-to-action'),
                  label: 'Your Bookshelf',
                }
              : undefined
          }
        />
      </Screen>
    );
  });
