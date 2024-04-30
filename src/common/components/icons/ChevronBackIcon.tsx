import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronBackIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.169 4.454c.44.44.44 1.152 0 1.59L10.215 12l5.954 5.954a1.125 1.125 0 1 1-1.591 1.59l-6.75-6.749a1.125 1.125 0 0 1 0-1.59l6.75-6.75c.44-.44 1.152-.44 1.59 0Z"
    />
  </Svg>
);

export const ChevronBackIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.169 4.454c.44.44.44 1.152 0 1.59L10.215 12l5.954 5.954a1.125 1.125 0 1 1-1.591 1.59l-6.75-6.749a1.125 1.125 0 0 1 0-1.59l6.75-6.75c.44-.44 1.152-.44 1.59 0Z"
    />,
  );
