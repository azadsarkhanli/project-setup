import React, { FC, useMemo } from 'react';

import { NativeBaseProvider } from '../../../common/components/NativeBaseProvider/NativeBaseProvider';
import { ScreenBackground } from '../../../common/components/Screen';
import {
  theme as defaultTheme,
  sepiaReaderTheme,
  nightReaderTheme,
} from '../../../theme';
import { ReaderColorTheme } from '../types';

type Props = {
  colorTheme: ReaderColorTheme;
};

export const ReaderWrapper: FC<Props> = ({ children, colorTheme }) => {
  const theme = useMemo(() => {
    switch (colorTheme) {
      case 'sepia':
        return sepiaReaderTheme;
      case 'night':
        return nightReaderTheme;
      default:
        return defaultTheme;
    }
  }, [colorTheme]);

  return (
    <NativeBaseProvider colorMode="light" theme={theme}>
      <ScreenBackground background="reader" flex={1}>
        {children}
      </ScreenBackground>
    </NativeBaseProvider>
  );
};
