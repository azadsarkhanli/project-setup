import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { Center } from 'native-base';
import React, { useState } from 'react';

import { Screen } from '../Screen';

import { CodeInput } from './CodeInput';

const StoryContainer: React.FC = props => {
  const { children } = props;

  return (
    <Screen>
      <Center flex={1}>{children}</Center>
    </Screen>
  );
};

const Story = () => {
  const [code, setCode] = useState('');
  return (
    <StoryContainer>
      <CodeInput
        value={code}
        onTextChange={setCode}
        onFulfill={action('fulfill')}
      />
    </StoryContainer>
  );
};

storiesOf('CodeInput', module).add('Default', () => <Story />);
