import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloseOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M7.28 6.22a.75.75 0 0 0-1.06 1.06l4.718 4.719-4.719 4.72a.75.75 0 0 0 1.06 1.06l4.72-4.72 4.719 4.72a.75.75 0 0 0 1.06-1.06l-4.719-4.72 4.72-4.72a.75.75 0 0 0-1.061-1.06l-4.72 4.72-4.718-4.72Z" />
  </Svg>
);

export const CloseOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M7.28 6.22a.75.75 0 0 0-1.06 1.06l4.718 4.719-4.719 4.72a.75.75 0 0 0 1.06 1.06l4.72-4.72 4.719 4.72a.75.75 0 0 0 1.06-1.06l-4.719-4.72 4.72-4.72a.75.75 0 0 0-1.061-1.06l-4.72 4.72-4.718-4.72Z" />,
  );
