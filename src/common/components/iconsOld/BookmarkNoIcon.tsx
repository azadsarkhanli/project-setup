import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBookmarkNoIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.75 4.75v6.877l2.736-1.759a.95.95 0 0 1 1.028 0l2.736 1.759V4.75h-6.5Zm-1.5-.55a.95.95 0 0 1 .95-.95h7.6a.95.95 0 0 1 .95.95v8.434a.95.95 0 0 1-1.463.799L8 11.321l-3.286 2.112a.95.95 0 0 1-1.464-.8V4.2Z"
    />
  </Svg>
);

export const BookmarkNoIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.75 4.75v6.877l2.736-1.759a.95.95 0 0 1 1.028 0l2.736 1.759V4.75h-6.5Zm-1.5-.55a.95.95 0 0 1 .95-.95h7.6a.95.95 0 0 1 .95.95v8.434a.95.95 0 0 1-1.463.799L8 11.321l-3.286 2.112a.95.95 0 0 1-1.464-.8V4.2Z"
    />,
  );
