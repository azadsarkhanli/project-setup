import { ComponentTheme } from 'native-base';

export const Menu: ComponentTheme = {
  baseStyle: {
    borderRadius: 'md',
    borderWidth: 0,
    py: 0,
    _light: {
      bg: 'primary.100',
    },
  },
};

export const MenuItem = {
  baseStyle: {
    px: 4,
    py: 3,
    _text: {
      fontSize: 'lg',
      _light: {
        color: 'muted.700',
      },
    },
  },
};
