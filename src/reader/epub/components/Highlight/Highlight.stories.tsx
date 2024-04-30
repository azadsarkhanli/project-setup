import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';
import { BookmarkMenu } from '../BookmarkMenu';

import { Highlight } from './Highlight';

storiesOf('Highlight', module).add('Knobs', () => (
  <Screen alignItems="center" justifyContent="center" p="4">
    <Highlight
      title={text('title', 'Title of Chapter')}
      onPress={action('onPress')}
      content={text(
        'content',
        'Felix er søtten år og begynner på ny skole. Der treffer han Nicolai og blir hodestups forelsket.',
      )}
      contentNumberOfLines={number('contentNumberOfLines', 3)}
      date={
        boolean('showDate', true)
          ? new Date(text('date', '23 Aug 2021 00:00:00 GMT'))
          : undefined
      }
      contextMenu={
        boolean('showBookmarkMenu', true) ? (
          <BookmarkMenu
            onDelete={() => {
              action('menu.onDelete');
            }}
            onNavigate={() => {
              action('menu.onNavigate');
            }}
          />
        ) : undefined
      }
    />
  </Screen>
));
