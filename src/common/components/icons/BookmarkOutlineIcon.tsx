import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBookmarkOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 4.5a3 3 0 0 1 3-3h8.998a3 3 0 0 1 3 3v17.248a.75.75 0 0 1-1.248.56l-6.251-5.556-6.251 5.556a.75.75 0 0 1-1.248-.56V4.5Zm3-1.5A1.5 1.5 0 0 0 6 4.5v15.578l5.5-4.89a.75.75 0 0 1 .997 0l5.501 4.89V4.5a1.5 1.5 0 0 0-1.5-1.5H7.5Z"
    />
  </Svg>
);

export const BookmarkOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 4.5a3 3 0 0 1 3-3h8.998a3 3 0 0 1 3 3v17.248a.75.75 0 0 1-1.248.56l-6.251-5.556-6.251 5.556a.75.75 0 0 1-1.248-.56V4.5Zm3-1.5A1.5 1.5 0 0 0 6 4.5v15.578l5.5-4.89a.75.75 0 0 1 .997 0l5.501 4.89V4.5a1.5 1.5 0 0 0-1.5-1.5H7.5Z"
    />,
  );
