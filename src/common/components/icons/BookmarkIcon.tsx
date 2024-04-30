import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBookmarkIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.748 22.498a.751.751 0 0 1-.498-.188l-6.251-5.558-6.251 5.558a.75.75 0 0 1-1.249-.563V4.5a3.002 3.002 0 0 1 3-3h8.999a3.002 3.002 0 0 1 3 3v17.248a.75.75 0 0 1-.75.75Z" />
  </Svg>
);

export const BookmarkIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.748 22.498a.751.751 0 0 1-.498-.188l-6.251-5.558-6.251 5.558a.75.75 0 0 1-1.249-.563V4.5a3.002 3.002 0 0 1 3-3h8.999a3.002 3.002 0 0 1 3 3v17.248a.75.75 0 0 1-.75.75Z" />,
  );
