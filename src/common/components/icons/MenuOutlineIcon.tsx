import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMenuOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M3 7.499a.75.75 0 0 1 .75-.75h16.498a.75.75 0 0 1 0 1.5H3.749a.75.75 0 0 1-.75-.75ZM3 11.998a.75.75 0 0 1 .75-.75h16.498a.75.75 0 0 1 0 1.5H3.749a.75.75 0 0 1-.75-.75ZM3.75 15.748a.75.75 0 0 0 0 1.5h16.498a.75.75 0 0 0 0-1.5H3.749Z" />
  </Svg>
);

export const MenuOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M3 7.499a.75.75 0 0 1 .75-.75h16.498a.75.75 0 0 1 0 1.5H3.749a.75.75 0 0 1-.75-.75ZM3 11.998a.75.75 0 0 1 .75-.75h16.498a.75.75 0 0 1 0 1.5H3.749a.75.75 0 0 1-.75-.75ZM3.75 15.748a.75.75 0 0 0 0 1.5h16.498a.75.75 0 0 0 0-1.5H3.749Z" />,
  );
