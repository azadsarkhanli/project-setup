import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronForwardIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.829 4.454c.439-.44 1.151-.44 1.59 0l6.75 6.75c.44.439.44 1.15 0 1.59l-6.75 6.75a1.125 1.125 0 1 1-1.59-1.591l5.954-5.954-5.954-5.954a1.125 1.125 0 0 1 0-1.591Z"
    />
  </Svg>
);

export const ChevronForwardIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.829 4.454c.439-.44 1.151-.44 1.59 0l6.75 6.75c.44.439.44 1.15 0 1.59l-6.75 6.75a1.125 1.125 0 1 1-1.59-1.591l5.954-5.954-5.954-5.954a1.125 1.125 0 0 1 0-1.591Z"
    />,
  );
