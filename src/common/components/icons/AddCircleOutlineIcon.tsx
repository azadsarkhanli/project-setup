import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAddCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.998 7.499a.75.75 0 0 1 .75.75v3h3a.75.75 0 0 1 0 1.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 0 1 0-1.5h3v-3a.75.75 0 0 1 .75-.75Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.998c0-5.382 4.366-9.748 9.748-9.748 5.383 0 9.75 4.366 9.75 9.748 0 5.383-4.367 9.75-9.75 9.75-5.382 0-9.748-4.367-9.748-9.75Zm9.748-8.249A8.251 8.251 0 0 0 3.75 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.249Z"
    />
  </Svg>
);

export const AddCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.998 7.499a.75.75 0 0 1 .75.75v3h3a.75.75 0 0 1 0 1.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 0 1 0-1.5h3v-3a.75.75 0 0 1 .75-.75Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.998c0-5.382 4.366-9.748 9.748-9.748 5.383 0 9.75 4.366 9.75 9.748 0 5.383-4.367 9.75-9.75 9.75-5.382 0-9.748-4.367-9.748-9.75Zm9.748-8.249A8.251 8.251 0 0 0 3.75 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.249Z"
    />,
  );
