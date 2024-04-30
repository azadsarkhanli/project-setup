import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMenuEllipsisIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M3.834 8c0-.75-.597-1.34-1.358-1.34a1.34 1.34 0 0 0 0 2.68c.749 0 1.358-.604 1.358-1.34Zm4.723 0c0-.75-.584-1.34-1.333-1.34a1.34 1.34 0 1 0 0 2.679c.73 0 1.333-.603 1.333-1.34Zm4.754 0c0-.75-.597-1.34-1.346-1.34-.749 0-1.352.597-1.352 1.34a1.35 1.35 0 0 0 2.698 0Z" />
  </Svg>
);

export const MenuEllipsisIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M3.834 8c0-.75-.597-1.34-1.358-1.34a1.34 1.34 0 0 0 0 2.68c.749 0 1.358-.604 1.358-1.34Zm4.723 0c0-.75-.584-1.34-1.333-1.34a1.34 1.34 0 1 0 0 2.679c.73 0 1.333-.603 1.333-1.34Zm4.754 0c0-.75-.597-1.34-1.346-1.34-.749 0-1.352.597-1.352 1.34a1.35 1.35 0 0 0 2.698 0Z" />,
  );
