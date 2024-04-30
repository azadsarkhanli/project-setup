import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckmarkOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.992 5.435a.75.75 0 0 1 .07 1.058L9.563 18.492a.75.75 0 0 1-1.094.036l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.933 3.933 9.971-11.395a.75.75 0 0 1 1.059-.071Z"
    />
  </Svg>
);

export const CheckmarkOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.992 5.435a.75.75 0 0 1 .07 1.058L9.563 18.492a.75.75 0 0 1-1.094.036l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.933 3.933 9.971-11.395a.75.75 0 0 1 1.059-.071Z"
    />,
  );
