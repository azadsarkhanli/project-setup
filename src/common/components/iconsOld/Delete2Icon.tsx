import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDelete2Icon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.818 4.818a.5.5 0 0 1 .707 0l2.476 2.476 2.475-2.475a.5.5 0 0 1 .707.707L8.708 8l2.474 2.474a.5.5 0 0 1-.707.707L8 8.708l-2.475 2.475a.5.5 0 1 1-.707-.707L7.294 8 4.818 5.525a.5.5 0 0 1 0-.707Z"
    />
  </Svg>
);

export const Delete2Icon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.818 4.818a.5.5 0 0 1 .707 0l2.476 2.476 2.475-2.475a.5.5 0 0 1 .707.707L8.708 8l2.474 2.474a.5.5 0 0 1-.707.707L8 8.708l-2.475 2.475a.5.5 0 1 1-.707-.707L7.294 8 4.818 5.525a.5.5 0 0 1 0-.707Z"
    />,
  );
