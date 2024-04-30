import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSearchOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.362 2.25a8.113 8.113 0 0 0-8.112 8.112l8.112-8.112Zm0 1.5a6.613 6.613 0 1 0 6.613 6.612M10.362 2.25a8.113 8.113 0 0 1 8.113 8.112 8.08 8.08 0 0 1-1.87 5.182l4.923 4.923a.75.75 0 0 1-1.06 1.06l-4.924-4.922A8.113 8.113 0 0 1 2.25 10.363m14.725 0a6.613 6.613 0 0 0-6.613-6.614"
    />
  </Svg>
);

export const SearchOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.362 2.25a8.113 8.113 0 0 0-8.112 8.112l8.112-8.112Zm0 1.5a6.613 6.613 0 1 0 6.613 6.612M10.362 2.25a8.113 8.113 0 0 1 8.113 8.112 8.08 8.08 0 0 1-1.87 5.182l4.923 4.923a.75.75 0 0 1-1.06 1.06l-4.924-4.922A8.113 8.113 0 0 1 2.25 10.363m14.725 0a6.613 6.613 0 0 0-6.613-6.614"
    />,
  );
