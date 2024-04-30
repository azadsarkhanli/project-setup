import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Center, VStack } from 'native-base';
import React from 'react';

import { HeadphonesIcon } from '../iconsOld';
import { Screen } from '../Screen';

import { Button } from './Button';

const label = text('text', 'Button name');

storiesOf('Button', module)
  .add('Knobs', () => (
    <Screen alignItems="center" justifyContent="center">
      <Button
        onPress={action('on-press')}
        isDisabled={boolean('isDisabled', false)}
        colorScheme={select(
          'colorScheme',
          {
            primary: 'primary',
            primaryLight: 'primaryLight',
            secondary: 'secondary',
          },
          'primary',
        )}
        size={select(
          'size',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg',
          },
          'md',
        )}
        variant={select(
          'variant',
          {
            solid: 'solid',
            outline: 'outline',
            ghost: 'ghost',
          },
          'solid',
        )}
        {...(boolean('startIcon', false) && { StartIcon: HeadphonesIcon })}
        {...(boolean('endIcon', false) && { EndIcon: HeadphonesIcon })}
      >
        {label}
      </Button>
    </Screen>
  ))
  .add('List', () => (
    <Screen>
      <Center>
        {[
          [undefined, undefined],
          [HeadphonesIcon, undefined],
          [undefined, HeadphonesIcon],
        ].map(([StartIcon, EndIcon]) =>
          (['lg', 'md', 'sm'] as const).map(size => (
            <VStack key={size} space={4} mt={8}>
              <Button
                colorScheme="primary"
                size={size}
                variant="solid"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
              <Button
                colorScheme="secondary"
                size={size}
                variant="solid"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
              <Button
                colorScheme="primary"
                size={size}
                variant="outline"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
              <Button
                colorScheme="secondary"
                size={size}
                variant="outline"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
              <Button
                colorScheme="primary"
                size={size}
                variant="ghost"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
              <Button
                colorScheme="secondary"
                size={size}
                variant="ghost"
                StartIcon={StartIcon}
                EndIcon={EndIcon}
              >
                {label}
              </Button>
            </VStack>
          )),
        )}
      </Center>
    </Screen>
  ));
