import { storiesOf } from '@storybook/react-native';
import { Modal } from 'native-base';
import React, { useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';

import { Screen } from '../Screen';

import { FullScreenModal } from './FullScreenModal';

const Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <Screen alignItems="center" justifyContent="center" p="4">
      <Button onPress={() => setOpen(true)} title="Open" />
      <FullScreenModal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.CloseButton />
        <Modal.Header>Return Policy</Modal.Header>
        <ScrollView>
          <Text>
            Create a 'Return Request' under “My Orders” section of App/Website.
            Follow the screens that come up after tapping on the 'Return'
            button. Please make a note of the Return ID that we generate at the
            end of the process. Keep the item ready for pick up or ship it to us
            basis on the return mode.
          </Text>
        </ScrollView>
      </FullScreenModal>
    </Screen>
  );
};

storiesOf('FullScreenModal', module).add('Default', () => <Story />);
