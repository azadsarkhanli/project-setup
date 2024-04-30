import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgVolumeOffIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M16.123 19.498a1.124 1.124 0 0 1-.697-.244l-4.286-3.51H7.874a1.125 1.125 0 0 1-1.125-1.125V9.377c0-.622.504-1.125 1.125-1.125h3.265l4.286-3.51a1.125 1.125 0 0 1 1.822.882v12.748c0 .621-.503 1.125-1.124 1.125Z" />
  </Svg>
);

export const VolumeOffIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M16.123 19.498a1.124 1.124 0 0 1-.697-.244l-4.286-3.51H7.874a1.125 1.125 0 0 1-1.125-1.125V9.377c0-.622.504-1.125 1.125-1.125h3.265l4.286-3.51a1.125 1.125 0 0 1 1.822.882v12.748c0 .621-.503 1.125-1.124 1.125Z" />,
  );
