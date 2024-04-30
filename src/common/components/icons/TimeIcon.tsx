import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgTimeIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.384 0-9.75 4.365-9.75 9.749s4.366 9.749 9.75 9.749 9.749-4.365 9.749-9.75c0-5.383-4.365-9.748-9.75-9.748Zm4.5 11.249h-4.5a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 1 1 1.5 0v6h3.75a.75.75 0 0 1 0 1.5Z" />
  </Svg>
);

export const TimeIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.384 0-9.75 4.365-9.75 9.749s4.366 9.749 9.75 9.749 9.749-4.365 9.749-9.75c0-5.383-4.365-9.748-9.75-9.748Zm4.5 11.249h-4.5a.75.75 0 0 1-.75-.75v-6.75a.75.75 0 1 1 1.5 0v6h3.75a.75.75 0 0 1 0 1.5Z" />,
  );
