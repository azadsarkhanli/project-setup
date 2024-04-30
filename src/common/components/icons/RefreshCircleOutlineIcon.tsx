import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRefreshCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.535 6.52a.656.656 0 0 1 .928 0l1.874 1.874a.656.656 0 0 1 0 .928l-1.874 1.875a.656.656 0 0 1-.928-.928l.844-.845c-.114-.002-.24-.003-.38-.003a3.093 3.093 0 1 0 3.093 3.093.656.656 0 1 1 1.312 0A4.406 4.406 0 1 1 12 8.108l.197.001-.661-.662a.656.656 0 0 1 0-.928Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 2.25c-5.382 0-9.748 4.366-9.748 9.748 0 5.383 4.366 9.75 9.748 9.75 5.383 0 9.75-4.367 9.75-9.75 0-5.382-4.367-9.748-9.75-9.748ZM3.75 11.998A8.251 8.251 0 0 1 12 3.75 8.251 8.251 0 0 1 20.248 12a8.251 8.251 0 0 1-8.25 8.249 8.251 8.251 0 0 1-8.249-8.25Z"
    />
  </Svg>
);

export const RefreshCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.535 6.52a.656.656 0 0 1 .928 0l1.874 1.874a.656.656 0 0 1 0 .928l-1.874 1.875a.656.656 0 0 1-.928-.928l.844-.845c-.114-.002-.24-.003-.38-.003a3.093 3.093 0 1 0 3.093 3.093.656.656 0 1 1 1.312 0A4.406 4.406 0 1 1 12 8.108l.197.001-.661-.662a.656.656 0 0 1 0-.928Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 2.25c-5.382 0-9.748 4.366-9.748 9.748 0 5.383 4.366 9.75 9.748 9.75 5.383 0 9.75-4.367 9.75-9.75 0-5.382-4.367-9.748-9.75-9.748ZM3.75 11.998A8.251 8.251 0 0 1 12 3.75 8.251 8.251 0 0 1 20.248 12a8.251 8.251 0 0 1-8.25 8.249 8.251 8.251 0 0 1-8.249-8.25Z"
    />,
  );
