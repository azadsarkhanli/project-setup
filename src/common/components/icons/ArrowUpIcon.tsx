import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgArrowUpIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.794 3.892a1.125 1.125 0 0 0-1.59 0l-6.75 6.749a1.125 1.125 0 1 0 1.59 1.59l4.83-4.828V19.31a1.125 1.125 0 0 0 2.25 0V7.403l4.829 4.829a1.125 1.125 0 0 0 1.59-1.591l-6.749-6.75Z"
    />
  </Svg>
);

export const ArrowUpIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.794 3.892a1.125 1.125 0 0 0-1.59 0l-6.75 6.749a1.125 1.125 0 1 0 1.59 1.59l4.83-4.828V19.31a1.125 1.125 0 0 0 2.25 0V7.403l4.829 4.829a1.125 1.125 0 0 0 1.59-1.591l-6.749-6.75Z"
    />,
  );
