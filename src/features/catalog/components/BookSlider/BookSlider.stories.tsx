import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Center, Text } from 'native-base';
import React from 'react';

import { makeBooksWithKnobs } from '../../../../../storybook/mocks/books';
import { Screen } from '../../../../common/components/Screen';

import { BookSlider } from './BookSlider';

storiesOf('BookSlider', module)
  .add('Empty', () => (
    <Screen>
      <BookSlider
        items={[]}
        emptyContainer={
          <Center flex={1}>
            <Text color="white">
              {text('emptyContainerText', 'No items to be listed.')}
            </Text>
          </Center>
        }
      />
    </Screen>
  ))
  .add('List', () => {
    const items = makeBooksWithKnobs();

    return (
      <Screen>
        <BookSlider
          items={items}
          emptyContainer={
            <Text color="white">
              {text('emptyContainerText', 'No items to be listed.')}
            </Text>
          }
          isStatusSectionVisible={true}
          onPress={action('on-press')}
        />
      </Screen>
    );
  });
