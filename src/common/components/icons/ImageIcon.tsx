import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgImageIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M19.498 3H4.499a3.002 3.002 0 0 0-3 3v11.998a3.002 3.002 0 0 0 3 3h14.999a3.003 3.003 0 0 0 3-3V5.999a3.002 3.002 0 0 0-3-3Zm-3.75 3a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM4.5 19.497a1.5 1.5 0 0 1-1.5-1.5v-3.17l4.446-3.95c.89-.79 2.24-.752 3.084.088l3.044 3.038-5.494 5.494h-3.58Zm16.499-1.5a1.5 1.5 0 0 1-1.5 1.5H10.2l5.691-5.691a2.236 2.236 0 0 1 2.89-.008l2.217 1.848v2.351Z" />
  </Svg>
);

export const ImageIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M19.498 3H4.499a3.002 3.002 0 0 0-3 3v11.998a3.002 3.002 0 0 0 3 3h14.999a3.003 3.003 0 0 0 3-3V5.999a3.002 3.002 0 0 0-3-3Zm-3.75 3a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM4.5 19.497a1.5 1.5 0 0 1-1.5-1.5v-3.17l4.446-3.95c.89-.79 2.24-.752 3.084.088l3.044 3.038-5.494 5.494h-3.58Zm16.499-1.5a1.5 1.5 0 0 1-1.5 1.5H10.2l5.691-5.691a2.236 2.236 0 0 1 2.89-.008l2.217 1.848v2.351Z" />,
  );
