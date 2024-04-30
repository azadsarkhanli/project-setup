import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCopyIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.555 3.75H7.5A3.75 3.75 0 0 0 3.75 7.5v11.055A3.38 3.38 0 0 1 1.5 15.374v-10.5A3.374 3.374 0 0 1 4.875 1.5h10.499a3.38 3.38 0 0 1 3.181 2.25Z" />
    <Path d="M8.624 22.498h10.5a3.375 3.375 0 0 0 3.374-3.375V8.624a3.375 3.375 0 0 0-3.375-3.374H8.624A3.374 3.374 0 0 0 5.25 8.624v10.5a3.375 3.375 0 0 0 3.374 3.374Z" />
  </Svg>
);

export const CopyIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.555 3.75H7.5A3.75 3.75 0 0 0 3.75 7.5v11.055A3.38 3.38 0 0 1 1.5 15.374v-10.5A3.374 3.374 0 0 1 4.875 1.5h10.499a3.38 3.38 0 0 1 3.181 2.25Z" />,
    <Path d="M8.624 22.498h10.5a3.375 3.375 0 0 0 3.374-3.375V8.624a3.375 3.375 0 0 0-3.375-3.374H8.624A3.374 3.374 0 0 0 5.25 8.624v10.5a3.375 3.375 0 0 0 3.374 3.374Z" />,
  );
