import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Button } from 'native-base';
import React, { useState } from 'react';

import { Screen } from '../../../../common/components/Screen';
import { StorybookReaderProvider } from '../../context/StorybookReaderProvider';

import { ReaderExperienceSettings } from './ReaderExperienceSettings';

const StateStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StorybookReaderProvider>
      <Screen background="reader">
        <Button onPress={() => setIsOpen(true)}>Open</Button>
        <ReaderExperienceSettings
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Screen>
    </StorybookReaderProvider>
  );
};

const KnobsStory = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StorybookReaderProvider
      colorTheme={select(
        'colorTheme',
        {
          default: 'default',
          sepia: 'sepia',
          night: 'night',
        },
        'night',
      )}
      setColorTheme={action('setColorTheme')}
      autoNightMode={boolean('autoNightMode', false)}
      setAutoNightMode={action('setAutoNightMode')}
    >
      <Screen background="reader">
        <ReaderExperienceSettings
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </Screen>
    </StorybookReaderProvider>
  );
};

storiesOf('ReaderExperienceSettings', module)
  .add('Knobs', () => <KnobsStory />)
  .add('State', () => <StateStory />);
