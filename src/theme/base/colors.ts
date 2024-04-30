import { IColorHues } from 'native-base/lib/typescript/theme/base/colors';

const primary: IColorHues = {
  '50': '#fff9f5',
  '100': '#fef7f1',
  '200': '#ffe9d6',
  '300': '#fecea4',
  '400': '#ff9d4d',
  '500': '#eb6a00',
  '600': '#c24e00',
  '700': '#a24202',
  '800': '#7a3300',
  '900': '#522100',
};

const primaryLight: IColorHues = {
  '50': '#f7e0ba',
  '100': '#ffe5ce',
  '200': '#ffddbe',
  '300': '#ffd4ae',
  '400': '#ffc66c',
  '500': '#ffb258',
  '600': '#f5871e',
  '700': '#ec6900',
  '800': '#d85500',
  '900': '#ba3700',
};

const secondary: IColorHues = {
  '50': '#f5fffb',
  '100': '#e0f5f2',
  '200': '#c6ebe5',
  '300': '#91cbcf',
  '400': '#2cc3aa',
  '500': '#2ba692',
  '600': '#218372',
  '700': '#165554',
  '800': '#00382f',
  '900': '#001f18',
};

const muted: IColorHues = {
  '50': '#f3f7f6',
  '100': '#f0f4f3',
  '200': '#e6ebe9',
  '300': '#d2dada',
  '400': '#b1bebe',
  '500': '#647373',
  '600': '#283939',
  '700': '#112627',
  '800': '#081112',
  '900': '#050a0a',
};

const info: IColorHues = {
  '50': '#f5feff',
  '100': '#f0f9fa',
  '200': '#d2ecef',
  '300': '#b3dfe5',
  '400': '#95d0db',
  '500': '#49b3c1',
  '600': '#24626a',
  '700': '#21575e',
  '800': '#00373d',
  '900': '#002024',
};

const success: IColorHues = {
  '50': '#f6fff5',
  '100': '#c2ffd2',
  '200': '#97f7b7',
  '300': '#7cda9d',
  '400': '#60be84',
  '500': '#44a26b',
  '600': '#238651',
  '700': '#006b3d',
  '800': '#00522d',
  '900': '#00381d',
};

const error: IColorHues = {
  '50': '#fffaff',
  '100': '#ffedeb',
  '200': '#ffdad6',
  '300': '#ffb3ad',
  '400': '#ff8680',
  '500': '#fb5956',
  '600': '#d84141',
  '700': '#b72429',
  '800': '#920213',
  '900': '#66000a',
};

const warning: IColorHues = {
  '50': '#fff9f5',
  '100': '#ffeedb',
  '200': '#ffdeb2',
  '300': '#ffbb4d',
  '400': '#e59d00',
  '500': '#c28100',
  '600': '#a36d00',
  '700': '#805500',
  '800': '#613f00',
  '900': '#422a00',
};

const danger: IColorHues = {
  '50': '#ffebee',
  '100': '#ffcdd2',
  '200': '#ef9a9a',
  '300': '#e57373',
  '400': '#ef5350',
  '500': '#d4342b',
  '600': '#c02017',
  '700': '#ac0c00',
  '800': '#840000',
  '900': '#710000',
};

export const colors = {
  primary,
  primaryLight,
  secondary,
  muted,
  danger,
  info,
  warning,
  error,
  success,
  lightText: muted[50],
  darkText: muted[900],
  readerBackground: '#ffffff',
  readerText: '#0f1b19',
  supporting: {
    statusGreen: '#2ACF8A',
  },
};
