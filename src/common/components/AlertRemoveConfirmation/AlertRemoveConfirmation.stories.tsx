import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';

import { Screen } from '../Screen';

import { AlertRemoveConfirmation } from './AlertRemoveConfirmation';

const Story = () => {
  const [open, setOpen] = useState(false);
  return (
    <Screen alignItems="center" justifyContent="center" p="4">
      <Button onPress={() => setOpen(true)} title="Open" />
      <AlertRemoveConfirmation
        isOpen={open}
        onPressConfirmRemoveFile={action('confirmRemove')}
        onRemoveAlertClose={() => setOpen(false)}
        isAudiobook={boolean('isAudiobook', false)}
      />
    </Screen>
  );
};

storiesOf('AlertRemoveConfirmation', module).add('Default', () => <Story />);
