import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMenuIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M3 7.124c0-.621.503-1.125 1.124-1.125h15.749a1.125 1.125 0 1 1 0 2.25H4.124A1.125 1.125 0 0 1 3 7.124ZM3 11.998c0-.62.503-1.124 1.124-1.124h15.749a1.125 1.125 0 1 1 0 2.25H4.124A1.125 1.125 0 0 1 3 11.997ZM4.124 15.748a1.125 1.125 0 1 0 0 2.25h15.749a1.125 1.125 0 1 0 0-2.25H4.124Z" />
  </Svg>
);

export const MenuIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M3 7.124c0-.621.503-1.125 1.124-1.125h15.749a1.125 1.125 0 1 1 0 2.25H4.124A1.125 1.125 0 0 1 3 7.124ZM3 11.998c0-.62.503-1.124 1.124-1.124h15.749a1.125 1.125 0 1 1 0 2.25H4.124A1.125 1.125 0 0 1 3 11.997ZM4.124 15.748a1.125 1.125 0 1 0 0 2.25h15.749a1.125 1.125 0 1 0 0-2.25H4.124Z" />,
  );
