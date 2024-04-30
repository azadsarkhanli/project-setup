import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgLogOutIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M8.249 11.249a.75.75 0 1 0 0 1.5h6.75v4.874a2.628 2.628 0 0 1-2.626 2.625H4.874a2.628 2.628 0 0 1-2.624-2.625V6.374A2.627 2.627 0 0 1 4.874 3.75H12c1.415 0 3 1.124 3 2.624v4.874h4.188l-2.47-2.47a.75.75 0 0 1 1.06-1.059l3.75 3.75v-.001a.75.75 0 0 1 0 1.06l-3.75 3.75-.026.027a.75.75 0 1 1-1.033-1.087l2.469-2.47h-4.189v-1.5h-6.75Z" />
  </Svg>
);

export const LogOutIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M8.249 11.249a.75.75 0 1 0 0 1.5h6.75v4.874a2.628 2.628 0 0 1-2.626 2.625H4.874a2.628 2.628 0 0 1-2.624-2.625V6.374A2.627 2.627 0 0 1 4.874 3.75H12c1.415 0 3 1.124 3 2.624v4.874h4.188l-2.47-2.47a.75.75 0 0 1 1.06-1.059l3.75 3.75v-.001a.75.75 0 0 1 0 1.06l-3.75 3.75-.026.027a.75.75 0 1 1-1.033-1.087l2.469-2.47h-4.189v-1.5h-6.75Z" />,
  );
