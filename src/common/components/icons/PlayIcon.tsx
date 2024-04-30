import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlayIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M7.232 20.623c-.287-.001-.57-.077-.82-.22a1.843 1.843 0 0 1-.912-1.608V5.203c0-.674.35-1.29.912-1.61.52-.299 1.163-.291 1.677.022l11.616 6.953a1.687 1.687 0 0 1 0 2.859L8.086 20.382a1.671 1.671 0 0 1-.854.24Z" />
  </Svg>
);

export const PlayIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M7.232 20.623c-.287-.001-.57-.077-.82-.22a1.843 1.843 0 0 1-.912-1.608V5.203c0-.674.35-1.29.912-1.61.52-.299 1.163-.291 1.677.022l11.616 6.953a1.687 1.687 0 0 1 0 2.859L8.086 20.382a1.671 1.671 0 0 1-.854.24Z" />,
  );
