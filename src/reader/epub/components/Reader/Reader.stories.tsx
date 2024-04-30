import { storiesOf } from '@storybook/react-native';
import { Text } from 'native-base';
import React, { FC } from 'react';

import { Screen } from '../../../../common/components/Screen';
import { useReaderContext } from '../../context/ReaderContext';
import { StorybookReaderProvider } from '../../context/StorybookReaderProvider';

import { Reader } from './Reader';

const PathGate: FC = ({ children }) => {
  const { path } = useReaderContext();

  if (!path) {
    return (
      <Screen justifyContent="center">
        <Text alignSelf="center">Please set file path using knobs</Text>
      </Screen>
    );
  }
  return <>{children}</>;
};

storiesOf('Reader', module).add('Default', () => {
  return (
    <StorybookReaderProvider>
      <PathGate>
        <Reader />
      </PathGate>
    </StorybookReaderProvider>
  );
});
