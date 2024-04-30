import {
  NativeBaseProvider as BaseNativeBaseProvider,
  NativeBaseProviderProps as BaseNativeBaseProviderProps,
  StorageManager,
} from 'native-base';
import React, { FC } from 'react';

import { theme as defaultTheme } from '../../../theme';

const lightColorModeManager: StorageManager = {
  get: async () => {
    return 'light';
  },
  set: async () => {
    // do nothing
  },
};

const darkColorModeManager: StorageManager = {
  get: async () => {
    return 'dark';
  },
  set: async () => {
    // do nothing
  },
};

const colorModeManagers: Record<
  NativeBaseProviderProps['colorMode'],
  StorageManager | undefined
> = {
  light: lightColorModeManager,
  dark: darkColorModeManager,
  system: undefined,
};

export type NativeBaseProviderProps = Omit<
  BaseNativeBaseProviderProps,
  'colorModeManager'
> & {
  colorMode: 'light' | 'dark' | 'system';
};

export const NativeBaseProvider: FC<NativeBaseProviderProps> = ({
  colorMode,
  children,
  theme = defaultTheme,
  ...props
}) => {
  const colorModeManager = colorModeManagers[colorMode];
  return (
    <BaseNativeBaseProvider
      colorModeManager={colorModeManager}
      theme={theme}
      {...props}
    >
      {children}
    </BaseNativeBaseProvider>
  );
};
