import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChatboxIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M6.75 21.75A.75.75 0 0 1 6 21v-3H4.875A3.379 3.379 0 0 1 1.5 14.625v-9A3.378 3.378 0 0 1 4.875 2.25h14.25A3.379 3.379 0 0 1 22.5 5.625v9A3.38 3.38 0 0 1 19.125 18h-7.606L7.23 21.576a.756.756 0 0 1-.48.174Z" />
  </Svg>
);

export const ChatboxIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M6.75 21.75A.75.75 0 0 1 6 21v-3H4.875A3.379 3.379 0 0 1 1.5 14.625v-9A3.378 3.378 0 0 1 4.875 2.25h14.25A3.379 3.379 0 0 1 22.5 5.625v9A3.38 3.38 0 0 1 19.125 18h-7.606L7.23 21.576a.756.756 0 0 1-.48.174Z" />,
  );
