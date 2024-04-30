import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgEllipsisVerticalIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.408 2.909A2.25 2.25 0 1 1 13.59 6.09a2.25 2.25 0 0 1-3.182-3.181Zm1.59 6.84a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 7.5a2.25 2.25 0 1 0 0 4.499 2.25 2.25 0 0 0 0-4.5Z"
    />
  </Svg>
);

export const EllipsisVerticalIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.408 2.909A2.25 2.25 0 1 1 13.59 6.09a2.25 2.25 0 0 1-3.182-3.181Zm1.59 6.84a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 7.5a2.25 2.25 0 1 0 0 4.499 2.25 2.25 0 0 0 0-4.5Z"
    />,
  );
