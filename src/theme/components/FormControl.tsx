import { ComponentTheme } from 'native-base';

export const FormControlLabel: ComponentTheme = {
  baseStyle: {
    _text: {
      fontSize: 'sm',
      fontWeight: 500,
      color: 'muted.500',
      _dark: {
        color: 'muted.300',
      },
    },
    mb: 2,
  },
};

export const FormControlErrorMessage: ComponentTheme = {
  defaultProps: {
    _stack: {
      space: 2,
      alignItems: 'center',
    },
  },
  baseStyle: {
    mt: 2,
    _text: {
      fontSize: 'md',
      color: 'error.700',
    },
  },
};
