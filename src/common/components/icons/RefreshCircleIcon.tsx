import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRefreshCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.374-9.75 9.749 0 5.383 4.366 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.383-4.365-9.748-9.75-9.748Zm0 14.67a4.406 4.406 0 0 1 0-8.811h.197l-.661-.661a.656.656 0 1 1 .928-.928l1.875 1.874a.656.656 0 0 1 0 .928l-1.876 1.875a.657.657 0 0 1-.928-.928l.844-.844c-.112-.005-.24-.005-.38-.005a3.093 3.093 0 1 0 3.094 3.094.656.656 0 1 1 1.312 0 4.412 4.412 0 0 1-4.406 4.405v.001Z" />
  </Svg>
);

export const RefreshCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.374-9.75 9.749 0 5.383 4.366 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.383-4.365-9.748-9.75-9.748Zm0 14.67a4.406 4.406 0 0 1 0-8.811h.197l-.661-.661a.656.656 0 1 1 .928-.928l1.875 1.874a.656.656 0 0 1 0 .928l-1.876 1.875a.657.657 0 0 1-.928-.928l.844-.844c-.112-.005-.24-.005-.38-.005a3.093 3.093 0 1 0 3.094 3.094.656.656 0 1 1 1.312 0 4.412 4.412 0 0 1-4.406 4.405v.001Z" />,
  );