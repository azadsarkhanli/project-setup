import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronDownIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.454 7.829c.44-.44 1.152-.44 1.59 0L12 13.783l5.954-5.954a1.125 1.125 0 0 1 1.59 1.59l-6.749 6.75c-.44.44-1.151.44-1.59 0l-6.75-6.75a1.125 1.125 0 0 1 0-1.59Z"
    />
  </Svg>
);

export const ChevronDownIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.454 7.829c.44-.44 1.152-.44 1.59 0L12 13.783l5.954-5.954a1.125 1.125 0 0 1 1.59 1.59l-6.749 6.75c-.44.44-1.151.44-1.59 0l-6.75-6.75a1.125 1.125 0 0 1 0-1.59Z"
    />,
  );
