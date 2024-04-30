import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';

import { readerMenuItems } from '../../../../../storybook/mocks/reader';
import { Screen } from '../../../../common/components/Screen';

import { ReaderMenu } from './ReaderMenu';
import { ReaderMenuItem } from './ReaderMenuItem';

const StateStory = () => {
  const [active, setActive] = useState('');
  return (
    <Screen background="reader" alignItems="center" justifyContent="flex-end">
      <ReaderMenu>
        {readerMenuItems.map(({ Icon, key, label }) => (
          <ReaderMenuItem
            key={key}
            Icon={Icon}
            isActive={active === key}
            onPress={() => setActive(key)}
            accessibilityLabel={label}
          />
        ))}
      </ReaderMenu>
    </Screen>
  );
};

storiesOf('ReaderMenu', module).add('State', () => <StateStory />);
