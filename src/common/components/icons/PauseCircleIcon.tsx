import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPauseCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm-1.5 12.748a.75.75 0 0 1-1.5 0V9a.75.75 0 1 1 1.5 0v6Zm4.5 0a.75.75 0 0 1-1.5 0V9a.75.75 0 1 1 1.5 0v6Z" />
  </Svg>
);

export const PauseCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm-1.5 12.748a.75.75 0 0 1-1.5 0V9a.75.75 0 1 1 1.5 0v6Zm4.5 0a.75.75 0 0 1-1.5 0V9a.75.75 0 1 1 1.5 0v6Z" />,
  );
