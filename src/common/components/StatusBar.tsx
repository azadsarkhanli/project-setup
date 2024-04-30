import { useColorMode } from 'native-base';
import React, { FC } from 'react';
import { StatusBar as BaseStatusBar, StatusBarProps } from 'react-native';

export const StatusBar: FC<StatusBarProps> = ({ backgroundColor }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <BaseStatusBar
      backgroundColor={backgroundColor}
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    />
  );
};
