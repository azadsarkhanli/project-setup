import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlaySkipBackCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M2.25 11.999c0 5.375 4.373 9.749 9.749 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748-5.375 0-9.748 4.373-9.748 9.749Zm6-3a.75.75 0 1 1 1.499 0v2.484l5.234-3.162a.505.505 0 0 1 .765.437v6.48a.506.506 0 0 1-.766.436l-5.234-3.16v2.484a.75.75 0 0 1-1.5 0l.001-5.999Z" />
  </Svg>
);

export const PlaySkipBackCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M2.25 11.999c0 5.375 4.373 9.749 9.749 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748-5.375 0-9.748 4.373-9.748 9.749Zm6-3a.75.75 0 1 1 1.499 0v2.484l5.234-3.162a.505.505 0 0 1 .765.437v6.48a.506.506 0 0 1-.766.436l-5.234-3.16v2.484a.75.75 0 0 1-1.5 0l.001-5.999Z" />,
  );
