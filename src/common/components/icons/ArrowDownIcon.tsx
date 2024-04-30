import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgArrowDownIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.124 4.687a1.125 1.125 0 0 0-2.25 0v11.908l-4.83-4.83a1.125 1.125 0 1 0-1.59 1.592l6.75 6.749c.439.44 1.15.44 1.59 0l6.75-6.75a1.125 1.125 0 1 0-1.591-1.59l-4.83 4.829V4.687Z"
    />
  </Svg>
);

export const ArrowDownIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.124 4.687a1.125 1.125 0 0 0-2.25 0v11.908l-4.83-4.83a1.125 1.125 0 1 0-1.59 1.592l6.75 6.749c.439.44 1.15.44 1.59 0l6.75-6.75a1.125 1.125 0 1 0-1.591-1.59l-4.83 4.829V4.687Z"
    />,
  );
