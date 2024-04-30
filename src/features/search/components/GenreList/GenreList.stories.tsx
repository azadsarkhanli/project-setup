import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { ALL_GENRES, GenreList } from './GenreList';

storiesOf('GenreList', module)
  .add('List', () => (
    <Screen>
      <GenreList title="Popular genres" genres={ALL_GENRES} />
    </Screen>
  ))
  .add('Knobs', () => (
    <Screen>
      <GenreList
        maxNumberOfItemsToShow={number('maxNumberOfItemsToShow', 8)}
        title={text('title', 'Popular Genres')}
        genres={ALL_GENRES}
      />
    </Screen>
  ));
