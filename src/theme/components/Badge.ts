import { ComponentTheme, IBadgeProps } from 'native-base';

export const Badge: ComponentTheme = {
  baseStyle: {
    flexDirection: 'row',
    py: 'px',
    _text: {
      textTransform: 'uppercase',
    },
  },
  variants: {
    solid: ({ colorScheme }: IBadgeProps) => ({
      bg: `${colorScheme}.600`,
      borderRadius: 4,
      _text: {
        color: 'muted.50',
      },
    }),
    ghost: ({ colorScheme }: IBadgeProps) => ({
      bg: `${colorScheme}.${ghostBg(colorScheme)}`,
      borderRadius: 4,
      borderColor: `${colorScheme}.${ghostBg(colorScheme)}`,
      borderWidth: 1,
      _text: {
        color: `${colorScheme}.900`,
      },
    }),
    outline: ({ colorScheme }: IBadgeProps) => ({
      borderColor: `${colorScheme}.600`,
      borderRadius: 4,
      _text: {
        color: `${colorScheme}.600`,
      },
    }),
  },
};

const ghostBg = (colorScheme?: string) => {
  switch (colorScheme) {
    case 'success':
      return '100';
    case 'primary':
      return '300';
    default:
      return '200';
  }
};
