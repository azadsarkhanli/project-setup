import { storiesOf } from '@storybook/react-native';
import { VStack, Text } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { HighlightTextColor } from './HighlightTextColor';

const flatHighlight = [
  { value: 'One ', isHighlighted: false },
  { value: 'highlighted', isHighlighted: true },
  { value: ' word', isHighlighted: false },
];
const nestedHighlight = [
  [
    { value: 'Jakob ', isHighlighted: false },
    { value: 'Ingebrightsen', isHighlighted: true },
  ],
  [
    { value: 'Fillip ', isHighlighted: false },
    { value: 'Ingebrightsen', isHighlighted: true },
  ],
  [
    { value: 'Henrik ', isHighlighted: false },
    { value: 'Ingebrightsen', isHighlighted: true },
  ],
];

storiesOf('HighlightTextColor', module).add('List', () => (
  <Screen>
    <VStack space={8}>
      <HighlightTextColor
        highlightColor={'yellow.500'}
        highlightValues={'Nothing is highlighted here'}
      />

      <HighlightTextColor
        highlightColor={'yellow.500'}
        highlightValues={flatHighlight}
      />
      <HighlightTextColor
        width={'1/3'}
        highlightColor={'yellow.500'}
        highlightValues={nestedHighlight}
        separator={', '}
      />

      <HighlightTextColor
        color={'blue.300'}
        _dark={{ color: 'blue.300' }}
        highlightColor={'yellow.500'}
        highlightValues={flatHighlight}
      >
        <Text color={'rose.300'} _dark={{ color: 'rose.300' }}>
          {
            ' + nested text which become part of the same NSAttributedString or SpannableString'
          }
        </Text>
      </HighlightTextColor>

      <HighlightTextColor
        highlightColor={'yellow.500'}
        highlightValues={undefined}
      />
    </VStack>
  </Screen>
));
