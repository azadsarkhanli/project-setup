import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlayCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.504 10.185-5.364 3.24a.506.506 0 0 1-.765-.437v-6.48a.505.505 0 0 1 .764-.437l5.364 3.24a.51.51 0 0 1 0 .872l.001.002Z" />
  </Svg>
);

export const PlayCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.504 10.185-5.364 3.24a.506.506 0 0 1-.765-.437v-6.48a.505.505 0 0 1 .764-.437l5.364 3.24a.51.51 0 0 1 0 .872l.001.002Z" />,
  );
