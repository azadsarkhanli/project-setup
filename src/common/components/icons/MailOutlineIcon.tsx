import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMailOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M5.71 6.907a.75.75 0 0 0-.92 1.184l6.749 5.25c.27.21.65.21.92 0l6.75-5.25a.75.75 0 0 0-.921-1.184l-6.29 4.892L5.71 6.907Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.125 3.75A2.625 2.625 0 0 0 1.5 6.374v11.25a2.625 2.625 0 0 0 2.625 2.624h15.748a2.625 2.625 0 0 0 2.625-2.625V6.374a2.625 2.625 0 0 0-2.625-2.624H4.125ZM3 6.374c0-.62.503-1.125 1.125-1.125h15.748c.621 0 1.125.504 1.125 1.125v11.25c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 17.623V6.374Z"
    />
  </Svg>
);

export const MailOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M5.71 6.907a.75.75 0 0 0-.92 1.184l6.749 5.25c.27.21.65.21.92 0l6.75-5.25a.75.75 0 0 0-.921-1.184l-6.29 4.892L5.71 6.907Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.125 3.75A2.625 2.625 0 0 0 1.5 6.374v11.25a2.625 2.625 0 0 0 2.625 2.624h15.748a2.625 2.625 0 0 0 2.625-2.625V6.374a2.625 2.625 0 0 0-2.625-2.624H4.125ZM3 6.374c0-.62.503-1.125 1.125-1.125h15.748c.621 0 1.125.504 1.125 1.125v11.25c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 17.623V6.374Z"
    />,
  );
