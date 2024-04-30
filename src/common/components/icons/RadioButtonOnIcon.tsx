import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRadioButtonOnIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M7.226 7.226a6.75 6.75 0 1 1 9.545 9.545 6.75 6.75 0 0 1-9.545-9.545Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 2.25c-5.382 0-9.748 4.366-9.748 9.748 0 5.383 4.366 9.75 9.748 9.75 5.383 0 9.75-4.367 9.75-9.75 0-5.382-4.367-9.748-9.75-9.748ZM3.75 11.998A8.251 8.251 0 0 1 12 3.75 8.251 8.251 0 0 1 20.248 12a8.251 8.251 0 0 1-8.25 8.249 8.251 8.251 0 0 1-8.249-8.25Z"
    />
  </Svg>
);

export const RadioButtonOnIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M7.226 7.226a6.75 6.75 0 1 1 9.545 9.545 6.75 6.75 0 0 1-9.545-9.545Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 2.25c-5.382 0-9.748 4.366-9.748 9.748 0 5.383 4.366 9.75 9.748 9.75 5.383 0 9.75-4.367 9.75-9.75 0-5.382-4.367-9.748-9.75-9.748ZM3.75 11.998A8.251 8.251 0 0 1 12 3.75 8.251 8.251 0 0 1 20.248 12a8.251 8.251 0 0 1-8.25 8.249 8.251 8.251 0 0 1-8.249-8.25Z"
    />,
  );
