import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgEyeIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M9.878 9.878a3 3 0 1 1 4.242 4.242 3 3 0 0 1-4.242-4.242Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.353 6.471c1.804 1.165 3.413 2.794 4.653 4.712.32.496.321 1.132.005 1.63-1.236 1.933-2.842 3.568-4.644 4.73-1.987 1.279-4.195 1.955-6.384 1.955-2.239 0-4.39-.656-6.389-1.951-1.775-1.15-3.368-2.78-4.606-4.718a1.496 1.496 0 0 1 .03-1.666C2.52 9.01 4.249 7.337 6.158 6.192 8.03 5.069 9.99 4.5 11.983 4.5c2.172 0 4.375.681 6.37 1.971ZM7.5 12a4.5 4.5 0 0 0 4.5 4.5 4.505 4.505 0 0 0 4.5-4.5 4.5 4.5 0 0 0-9 0Z"
    />
  </Svg>
);

export const EyeIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M9.878 9.878a3 3 0 1 1 4.242 4.242 3 3 0 0 1-4.242-4.242Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.353 6.471c1.804 1.165 3.413 2.794 4.653 4.712.32.496.321 1.132.005 1.63-1.236 1.933-2.842 3.568-4.644 4.73-1.987 1.279-4.195 1.955-6.384 1.955-2.239 0-4.39-.656-6.389-1.951-1.775-1.15-3.368-2.78-4.606-4.718a1.496 1.496 0 0 1 .03-1.666C2.52 9.01 4.249 7.337 6.158 6.192 8.03 5.069 9.99 4.5 11.983 4.5c2.172 0 4.375.681 6.37 1.971ZM7.5 12a4.5 4.5 0 0 0 4.5 4.5 4.505 4.505 0 0 0 4.5-4.5 4.5 4.5 0 0 0-9 0Z"
    />,
  );
