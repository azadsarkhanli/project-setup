import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Badge, Center, HStack, VStack } from 'native-base';
import React from 'react';

import { BookIcon } from './icons';
import { Screen } from './Screen';

const label = text('text', 'Badge name');

const colorSchemeMap = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

storiesOf('Badge', module)
  .add('Knobs', () => (
    <Screen m={8}>
      <Badge
        alignSelf="center"
        colorScheme={select('colorScheme', colorSchemeMap, 'primary')}
        _text={{
          fontSize: select(
            'fontSize',
            {
              xs: 'xs',
              sm: 'sm',
            },
            'sm',
          ),
        }}
        variant={select(
          'variant',
          {
            solid: 'solid',
            outline: 'outline',
            ghost: 'ghost',
          },
          'solid',
        )}
      >
        {boolean('icon', false) && (
          <BookIcon color="muted.50" size="sm" mr="2" />
        )}
        {label}
      </Badge>
    </Screen>
  ))
  .add('List', () => (
    <Screen>
      <Center>
        <HStack space="4">
          {(['solid', 'outline', 'ghost'] as const).map(variant => (
            <VStack key={variant} space="4">
              {Object.keys(colorSchemeMap).map(colorScheme =>
                (['xs', 'sm'] as const).map(fontSize => (
                  <Badge
                    key={`${variant}_${colorScheme}_${fontSize}`}
                    colorScheme={colorScheme}
                    variant={variant}
                    _text={{ fontSize }}
                  >
                    {label}
                  </Badge>
                )),
              )}
            </VStack>
          ))}
        </HStack>
      </Center>
    </Screen>
  ));
