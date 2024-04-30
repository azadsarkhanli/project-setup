import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';

import { i18n } from '../../app/i18n/i18n';
import { NativeBaseProvider } from '../../common/components/NativeBaseProvider/NativeBaseProvider';

// Setting initialWindowMetrics in order for tests to work properly
// https://docs.nativebase.io/testing#adding-initialwindowmetrics-in-nativebaseprovider
const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const AllTheProviders: FC = ({ children }) => (
  <NativeBaseProvider colorMode="dark" initialWindowMetrics={inset}>
    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  </NativeBaseProvider>
);
