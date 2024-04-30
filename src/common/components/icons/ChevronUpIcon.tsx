import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronUpIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.203 7.829c.44-.44 1.152-.44 1.591 0l6.75 6.749a1.125 1.125 0 1 1-1.591 1.59l-5.954-5.953-5.954 5.954a1.125 1.125 0 1 1-1.591-1.591l6.75-6.75Z"
    />
  </Svg>
);

export const ChevronUpIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.203 7.829c.44-.44 1.152-.44 1.591 0l6.75 6.749a1.125 1.125 0 1 1-1.591 1.59l-5.954-5.953-5.954 5.954a1.125 1.125 0 1 1-1.591-1.591l6.75-6.75Z"
    />,
  );
