import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlaySkipForwardIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.748 3a.75.75 0 0 0-.75.75v6.394l-10.91-6.53a1.646 1.646 0 0 0-1.676-.02A1.841 1.841 0 0 0 4.5 5.203v13.592c0 .673.35 1.29.912 1.609.52.299 1.163.291 1.676-.021l10.91-6.53v6.395a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75Z" />
  </Svg>
);

export const PlaySkipForwardIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.748 3a.75.75 0 0 0-.75.75v6.394l-10.91-6.53a1.646 1.646 0 0 0-1.676-.02A1.841 1.841 0 0 0 4.5 5.203v13.592c0 .673.35 1.29.912 1.609.52.299 1.163.291 1.676-.021l10.91-6.53v6.395a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75Z" />,
  );
