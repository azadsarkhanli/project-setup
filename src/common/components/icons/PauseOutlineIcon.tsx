import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPauseOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.249 3.75a.75.75 0 0 0-.75.75v14.998c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-.75Zm6.75 0a.75.75 0 0 0-.75.75v14.998c0 .414.335.75.75.75h.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-.75Z"
    />
  </Svg>
);

export const PauseOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.249 3.75a.75.75 0 0 0-.75.75v14.998c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-.75Zm6.75 0a.75.75 0 0 0-.75.75v14.998c0 .414.335.75.75.75h.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-.75Z"
    />,
  );
