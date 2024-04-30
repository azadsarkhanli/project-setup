import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBookmarkFilledIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      d="M11.175 1.023H4.637a1.73 1.73 0 0 0-1.193.576 1.75 1.75 0 0 0-.442 1.254v9.214a.939.939 0 0 0 .53.856c.129.066.27.1.414.1a.959.959 0 0 0 .617-.205l3.362-2.674 3.367 2.674c.166.131.37.203.58.205a.885.885 0 0 0 .414-.1.945.945 0 0 0 .53-.856V2.853a1.75 1.75 0 0 0-.444-1.256 1.73 1.73 0 0 0-1.197-.574Z"
      fill="#EC6900"
    />
  </Svg>
);

export const BookmarkFilledIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      d="M11.175 1.023H4.637a1.73 1.73 0 0 0-1.193.576 1.75 1.75 0 0 0-.442 1.254v9.214a.939.939 0 0 0 .53.856c.129.066.27.1.414.1a.959.959 0 0 0 .617-.205l3.362-2.674 3.367 2.674c.166.131.37.203.58.205a.885.885 0 0 0 .414-.1.945.945 0 0 0 .53-.856V2.853a1.75 1.75 0 0 0-.444-1.256 1.73 1.73 0 0 0-1.197-.574Z"
      fill="#EC6900"
    />,
  );
