import { storiesOf } from '@storybook/react-native';
import { Button } from 'native-base';
import React, { useState } from 'react';

import { Screen } from '../../../../common/components/Screen';
import { StorybookPlayerProvider } from '../../context/StorybookPlayerProvider';

import { PlaybackSettings } from './PlaybackSettings';

const StateStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StorybookPlayerProvider>
      <Screen>
        <Button onPress={() => setIsOpen(true)}>Open</Button>
        <PlaybackSettings isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Screen>
    </StorybookPlayerProvider>
  );
};

storiesOf('PlaybackSettings', module).add('State', () => <StateStory />);
