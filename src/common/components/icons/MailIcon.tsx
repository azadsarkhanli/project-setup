import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMailIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M19.873 3.75H4.124A2.627 2.627 0 0 0 1.5 6.374v11.25a2.628 2.628 0 0 0 2.624 2.624h15.749a2.628 2.628 0 0 0 2.624-2.625V6.374a2.628 2.628 0 0 0-2.624-2.624Zm-.665 4.341-6.75 5.25a.75.75 0 0 1-.92 0L4.79 8.09a.75.75 0 1 1 .92-1.185L12 11.798l6.288-4.892a.75.75 0 0 1 .92 1.184l.001.001Z" />
  </Svg>
);

export const MailIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M19.873 3.75H4.124A2.627 2.627 0 0 0 1.5 6.374v11.25a2.628 2.628 0 0 0 2.624 2.624h15.749a2.628 2.628 0 0 0 2.624-2.625V6.374a2.628 2.628 0 0 0-2.624-2.624Zm-.665 4.341-6.75 5.25a.75.75 0 0 1-.92 0L4.79 8.09a.75.75 0 1 1 .92-1.185L12 11.798l6.288-4.892a.75.75 0 0 1 .92 1.184l.001.001Z" />,
  );
