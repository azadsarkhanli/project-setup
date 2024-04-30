import { Dict } from 'native-base/lib/typescript/theme/tools';

const variantSolid = (props: Dict) => {
  const { colorScheme } = props;
  return {
    rounded: 'full',
    bg: `${colorScheme}.600`,
    _hover: {
      bg: `${colorScheme}.700`,
    },
    _pressed: {
      bg: `${colorScheme}.800`,
    },
    _focus: {
      bg: `${colorScheme}.600`,
    },
    _disabled: {
      bg: 'muted.300',
      _icon: {
        color: 'muted.500',
      },
    },
  };
};

const variantGhost = (props: Dict) => {
  const { colorScheme } = props;
  return {
    rounded: 'full',
    bg: `${colorScheme}.200`,
    _icon: {
      color: `${colorScheme}.600`,
    },
    _hover: {
      bg: `${colorScheme}.700`,
      _icon: {
        color: 'muted.50',
      },
    },
    _pressed: {
      bg: `${colorScheme}.800`,
      _icon: {
        color: 'muted.50',
      },
    },
    _focus: {
      bg: `${colorScheme}.600`,
      _icon: {
        color: 'muted.50',
      },
    },
    _disabled: {
      bg: 'muted.300',
      _icon: {
        color: 'muted.500',
      },
    },
  };
};

const variantUnstyled = (props: Dict) => {
  const { colorScheme } = props;
  return {
    rounded: 'full',
    _icon: {
      color: `${colorScheme}.600`,
    },
    _hover: {
      _icon: {
        color: `${colorScheme}.700`,
      },
    },
    _pressed: {
      _icon: {
        color: `${colorScheme}.800`,
      },
    },
    _focus: {
      borderWidth: 1,
      borderColor: 'info.600',
    },
    _disabled: {
      _icon: {
        color: 'muted.500',
      },
    },
  };
};

const variants = {
  solid: variantSolid,
  ghost: variantGhost,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    p: 3,
  },
  md: {
    p: 2.5,
  },
  sm: {
    p: 2,
  },
};

export const IconButton = {
  sizes,
  variants,
};
