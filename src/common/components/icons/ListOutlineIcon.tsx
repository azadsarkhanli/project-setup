import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgListOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M3.75 5.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7.499 6a.75.75 0 1 0 0 1.5h13.498a.75.75 0 1 0 0-1.5H7.5ZM7.499 11.249a.75.75 0 0 0 0 1.5h13.498a.75.75 0 0 0 0-1.5H7.5ZM6.749 17.248a.75.75 0 0 1 .75-.75h13.498a.75.75 0 1 1 0 1.5H7.5a.75.75 0 0 1-.75-.75ZM2.689 10.938a1.5 1.5 0 1 1 2.12 2.121 1.5 1.5 0 0 1-2.12-2.12ZM3.75 15.748a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  </Svg>
);

export const ListOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M3.75 5.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7.499 6a.75.75 0 1 0 0 1.5h13.498a.75.75 0 1 0 0-1.5H7.5ZM7.499 11.249a.75.75 0 0 0 0 1.5h13.498a.75.75 0 0 0 0-1.5H7.5ZM6.749 17.248a.75.75 0 0 1 .75-.75h13.498a.75.75 0 1 1 0 1.5H7.5a.75.75 0 0 1-.75-.75ZM2.689 10.938a1.5 1.5 0 1 1 2.12 2.121 1.5 1.5 0 0 1-2.12-2.12ZM3.75 15.748a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />,
  );
