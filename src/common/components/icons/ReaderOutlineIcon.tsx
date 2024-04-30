import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgReaderOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M8.249 5.25a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5h-7.5ZM7.5 9.75A.75.75 0 0 1 8.248 9h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM8.249 12.749a.75.75 0 1 0 0 1.5h3.75a.75.75 0 1 0 0-1.5h-3.75Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 1.5a3 3 0 0 0-3 3v14.998a3 3 0 0 0 3 3h10.498a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3H6.75Zm-1.5 3A1.5 1.5 0 0 1 6.75 3h10.498a1.5 1.5 0 0 1 1.5 1.5v14.998a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V4.5Z"
    />
  </Svg>
);

export const ReaderOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M8.249 5.25a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5h-7.5ZM7.5 9.75A.75.75 0 0 1 8.248 9h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM8.249 12.749a.75.75 0 1 0 0 1.5h3.75a.75.75 0 1 0 0-1.5h-3.75Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.75 1.5a3 3 0 0 0-3 3v14.998a3 3 0 0 0 3 3h10.498a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3H6.75Zm-1.5 3A1.5 1.5 0 0 1 6.75 3h10.498a1.5 1.5 0 0 1 1.5 1.5v14.998a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V4.5Z"
    />,
  );
