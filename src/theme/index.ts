import { extendTheme } from 'native-base';

import { base } from './base';
import { components } from './components';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

export const theme = extendTheme({ ...base, components, config });

export const sepiaReaderTheme = extendTheme({
  ...base,
  components,
  config,
  colors: {
    ...base.colors,
    readerBackground: base.colors.primary[300],
    readerText: base.colors.muted[600],
  },
});

export const nightReaderTheme = extendTheme({
  ...base,
  components,
  config,
  colors: {
    ...base.colors,
    readerBackground: '#000000',
    readerText: base.colors.muted[300],
  },
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  type ICustomTheme = CustomThemeType;
  interface ITextProps {
    variant?: keyof CustomThemeType['components']['Text']['variants'];
  }
}
