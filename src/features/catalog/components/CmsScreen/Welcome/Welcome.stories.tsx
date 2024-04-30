import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from '../../../../../common/components/Screen';

import { Welcome } from './Welcome';

storiesOf('Welcome', module).add('Default', () => {
  const user = {
    firstName: text('firstName', 'Alexander'),
  };

  return (
    <Screen>
      <Welcome user={user} onPress={action('on-press')} />
    </Screen>
  );
});
