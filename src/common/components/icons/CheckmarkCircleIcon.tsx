import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckmarkCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm5.073 6.481-6.299 7.5a.753.753 0 0 1-.562.267h-.013a.75.75 0 0 1-.557-.248l-2.7-3a.75.75 0 1 1 1.09-1.03l.024.027 2.122 2.358 5.746-6.839a.75.75 0 0 1 1.148.964l.001.001Z" />
  </Svg>
);

export const CheckmarkCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm5.073 6.481-6.299 7.5a.753.753 0 0 1-.562.267h-.013a.75.75 0 0 1-.557-.248l-2.7-3a.75.75 0 1 1 1.09-1.03l.024.027 2.122 2.358 5.746-6.839a.75.75 0 0 1 1.148.964l.001.001Z" />,
  );
