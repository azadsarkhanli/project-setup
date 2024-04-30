import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgArrowForwardIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.357 4.454a1.125 1.125 0 0 0-1.591 1.59l4.829 4.83H4.687a1.125 1.125 0 1 0 0 2.25h11.908l-4.83 4.829a1.125 1.125 0 1 0 1.591 1.59l6.75-6.749c.439-.44.439-1.151 0-1.59l-6.75-6.75Z"
    />
  </Svg>
);

export const ArrowForwardIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.357 4.454a1.125 1.125 0 0 0-1.591 1.59l4.829 4.83H4.687a1.125 1.125 0 1 0 0 2.25h11.908l-4.83 4.829a1.125 1.125 0 1 0 1.591 1.59l6.75-6.749c.439-.44.439-1.151 0-1.59l-6.75-6.75Z"
    />,
  );
