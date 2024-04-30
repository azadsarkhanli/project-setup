import { ComponentTheme } from 'native-base';
import React from 'react';

import { CheckIcon } from '../../common/components/iconsOld';

export const Checkbox: ComponentTheme = {
  defaultProps: {
    size: 'default',
    icon: <CheckIcon />,
  },
  sizes: {
    default: {
      _text: {
        fontSize: 'sm',
      },
      _icon: { size: 5 },
    },
  },
  baseStyle: {
    bg: 'white',
    borderColor: 'muted.600',
    _dark: {
      bg: 'secondary.100',
      borderColor: 'secondary.100',
      _icon: {
        color: 'secondary.600',
      },
      _checked: {
        borderColor: 'secondary.100',
        bg: 'secondary.100',
        _pressed: {
          borderColor: 'secondary.100',
          bg: 'secondary.100',
        },
      },
    },
    _interactionBox: {
      display: 'none',
    },
    _text: {
      ml: 4,
    },
  },
};
