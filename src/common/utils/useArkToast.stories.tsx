import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button, VStack } from 'native-base';
import React from 'react';

import { BookmarkFilledIcon } from '../components/iconsOld';
import { Screen } from '../components/Screen';

import { useArkToast } from './useArkToast';

const ArkToastContainer = () => {
  const { show, close } = useArkToast(
    BookmarkFilledIcon,
    text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
    text('buttonText', 'Acknowledge'),
    action('onButtonPress'),
  );
  return (
    <Screen p="4" justifyContent="flex-end">
      <VStack space="4">
        <Button onPress={show}>Show Ark Toast</Button>
        <Button onPress={close}>Close Ark Toast</Button>
      </VStack>
    </Screen>
  );
};

storiesOf('useArkToast', module).add('Default', () => <ArkToastContainer />);
