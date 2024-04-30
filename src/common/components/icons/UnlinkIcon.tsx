import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgUnlinkIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M3.375 11.998a3.375 3.375 0 0 1 3.374-3.374h2.597a1.125 1.125 0 0 0 0-2.25H6.75a5.624 5.624 0 1 0 0 11.249h2.656a1.125 1.125 0 1 0 0-2.25H6.749A3.375 3.375 0 0 1 3.375 12ZM14.651 6.374a1.125 1.125 0 0 0 0 2.25h2.597a3.375 3.375 0 0 1 0 6.75h-2.655a1.125 1.125 0 1 0 0 2.249h2.655a5.625 5.625 0 0 0 0-11.249h-2.597Z" />
  </Svg>
);

export const UnlinkIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M3.375 11.998a3.375 3.375 0 0 1 3.374-3.374h2.597a1.125 1.125 0 0 0 0-2.25H6.75a5.624 5.624 0 1 0 0 11.249h2.656a1.125 1.125 0 1 0 0-2.25H6.749A3.375 3.375 0 0 1 3.375 12ZM14.651 6.374a1.125 1.125 0 0 0 0 2.25h2.597a3.375 3.375 0 0 1 0 6.75h-2.655a1.125 1.125 0 1 0 0 2.249h2.655a5.625 5.625 0 0 0 0-11.249h-2.597Z" />,
  );
