import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSearchIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="m21.405 19.75-4.41-4.41a8.149 8.149 0 0 0 1.633-4.901c0-4.516-3.674-8.19-8.19-8.19-4.515 0-8.189 3.674-8.189 8.19 0 4.515 3.674 8.189 8.19 8.189a8.149 8.149 0 0 0 4.901-1.633l4.41 4.41a1.172 1.172 0 0 0 1.655-1.655ZM4.589 10.44a5.849 5.849 0 1 1 5.85 5.85 5.856 5.856 0 0 1-5.85-5.85Z" />
  </Svg>
);

export const SearchIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="m21.405 19.75-4.41-4.41a8.149 8.149 0 0 0 1.633-4.901c0-4.516-3.674-8.19-8.19-8.19-4.515 0-8.189 3.674-8.189 8.19 0 4.515 3.674 8.189 8.19 8.189a8.149 8.149 0 0 0 4.901-1.633l4.41 4.41a1.172 1.172 0 0 0 1.655-1.655ZM4.589 10.44a5.849 5.849 0 1 1 5.85 5.85 5.856 5.856 0 0 1-5.85-5.85Z" />,
  );
