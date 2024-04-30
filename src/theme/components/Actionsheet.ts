import { ComponentTheme } from 'native-base';

export const ActionsheetContent: ComponentTheme = {
  baseStyle: {
    px: 8,
    pt: 4,
    pb: 8,
    background: 'muted.50',
    _dark: {
      background: 'secondary.900',
    },
    _dragIndicator: {
      mt: -2,
    },
  },
};
export const ActionsheetItem = {
  baseStyle: {
    rounded: 0,
    px: '0',
  },
};
