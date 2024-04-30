import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgEllipsisHorizontalIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.909 10.408a2.25 2.25 0 1 1 3.182 3.181 2.25 2.25 0 0 1-3.182-3.181Zm9.09-.659a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm7.5 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
    />
  </Svg>
);

export const EllipsisHorizontalIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.909 10.408a2.25 2.25 0 1 1 3.182 3.181 2.25 2.25 0 0 1-3.182-3.181Zm9.09-.659a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm7.5 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
    />,
  );
