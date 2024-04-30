import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRemoveOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.249 11.249h-6a.75.75 0 1 0 0 1.5H18.748a.75.75 0 1 0 0-1.5h-7.5Z" />
  </Svg>
);

export const RemoveOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.249 11.249h-6a.75.75 0 1 0 0 1.5H18.748a.75.75 0 1 0 0-1.5h-7.5Z" />,
  );
