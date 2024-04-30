import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlaySkipBackIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M5.25 3a.75.75 0 0 1 .75.75v6.394l10.91-6.53a1.645 1.645 0 0 1 1.676-.021c.562.319.912.937.912 1.61v13.591c0 .674-.35 1.29-.912 1.61-.521.299-1.164.29-1.677-.022L6 13.853v6.395a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z" />
  </Svg>
);

export const PlaySkipBackIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M5.25 3a.75.75 0 0 1 .75.75v6.394l10.91-6.53a1.645 1.645 0 0 1 1.676-.021c.562.319.912.937.912 1.61v13.591c0 .674-.35 1.29-.912 1.61-.521.299-1.164.29-1.677-.022L6 13.853v6.395a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z" />,
  );
