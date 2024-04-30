import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPauseIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 20.248h2.25a.75.75 0 0 0 .75-.75V4.499a.75.75 0 0 0-.75-.75H7.5a.75.75 0 0 0-.75.75v14.999c0 .414.335.75.75.75Zm6.749 0h2.25a.75.75 0 0 0 .75-.75V4.499a.75.75 0 0 0-.75-.75h-2.25a.75.75 0 0 0-.75.75v14.999c0 .414.336.75.75.75Z"
    />
  </Svg>
);

export const PauseIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 20.248h2.25a.75.75 0 0 0 .75-.75V4.499a.75.75 0 0 0-.75-.75H7.5a.75.75 0 0 0-.75.75v14.999c0 .414.335.75.75.75Zm6.749 0h2.25a.75.75 0 0 0 .75-.75V4.499a.75.75 0 0 0-.75-.75h-2.25a.75.75 0 0 0-.75.75v14.999c0 .414.336.75.75.75Z"
    />,
  );
