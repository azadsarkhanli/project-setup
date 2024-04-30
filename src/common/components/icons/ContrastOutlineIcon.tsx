import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgContrastOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.999 1.5a10.499 10.499 0 1 0 0 20.998 10.499 10.499 0 0 0 0-20.998Zm0 1.5v17.998a8.999 8.999 0 0 0 0-17.998Z"
    />
  </Svg>
);

export const ContrastOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.999 1.5a10.499 10.499 0 1 0 0 20.998 10.499 10.499 0 0 0 0-20.998Zm0 1.5v17.998a8.999 8.999 0 0 0 0-17.998Z"
    />,
  );
