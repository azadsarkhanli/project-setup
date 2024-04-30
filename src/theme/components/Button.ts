import { ComponentTheme, IButtonProps } from 'native-base';

export const Button: ComponentTheme = {
  defaultProps: {
    rounded: 'full',
  },
  sizes: {
    lg: {
      px: 6,
      py: 3,
      _text: {
        fontSize: 'xl',
        lineHeight: 'lg',
      },
    },
    md: {
      px: 4,
      py: 3,
      _text: {
        fontSize: 'md',
        lineHeight: 'lg',
      },
    },
    sm: {
      px: 3,
      py: '5.5px',
      _text: {
        fontSize: 'sm',
        lineHeight: 'lg',
      },
    },
  },
  variants: {
    ghost: ({ colorScheme }: IButtonProps) => ({
      bg: `${colorScheme}.200`,
      _text: {
        color: `${colorScheme}.700`,
        _dark: {
          color: `${colorScheme}.100`,
        },
      },
      _pressed: {
        bg: `${colorScheme}.300`,
      },
    }),
    outline: ({ colorScheme }: IButtonProps) => ({
      _text: {
        color: `${colorScheme}.600`,
        _dark: {
          color: `${colorScheme}.400`,
        },
      },
      borderColor: `${colorScheme}.600`,
      _pressed: {
        _text: {
          color: `${colorScheme}.800`,
        },
        bg: 'none',
        borderColor: `${colorScheme}.800`,
      },
    }),
    solid: ({ colorScheme }: IButtonProps) => ({
      bg: `${colorScheme}.600`,
      _text: {
        color: colorScheme === 'primaryLight' ? 'darkText' : 'lightText',
        _dark: {
          color: colorScheme === 'primaryLight' ? 'darkText' : 'lightText',
        },
      },
      _pressed: {
        bg: `${colorScheme}.800`,
      },
      _disabled: {
        bg: colorScheme === 'muted.300',
        _text: {
          color: 'darkText',
        },
      },
    }),
  },
};
