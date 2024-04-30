import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgIconWrapperXxxlIcon = () => (
  <Svg fill="none" viewBox="0 0 64 64">
    <Path d="M5.687 32.184c0 7.693 2.234 16.199 5.992 22.775.711 1.244 2.057 1.625 3.326.99 1.245 1.828 3.377 2.565 5.79 1.854 3.046-.94 4.417-3.58 3.503-6.602l-3.656-12.06c-.914-2.996-3.504-4.367-6.576-3.479-1.295.381-2.285 1.092-2.92 2.031-.254-1.853-.406-3.707-.406-5.51 0-13.888 8.48-23.13 21.201-23.13 12.72 0 21.227 9.242 21.227 23.13 0 1.803-.127 3.657-.407 5.51-.634-.914-1.625-1.625-2.945-2.03-3.047-.89-5.637.482-6.55 3.478L39.608 51.2c-.94 3.047.457 5.662 3.478 6.602 2.438.71 4.57-.026 5.79-1.828 1.294.609 2.64.228 3.351-1.016 3.758-6.576 6.018-15.082 6.018-22.775C58.246 15.248 47.759 4 31.94 4 16.148 4 5.687 15.248 5.687 32.184Z" />
  </Svg>
);

export const IconWrapperXxxlIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 64 64',
      ...props,
    },
    <Path d="M5.687 32.184c0 7.693 2.234 16.199 5.992 22.775.711 1.244 2.057 1.625 3.326.99 1.245 1.828 3.377 2.565 5.79 1.854 3.046-.94 4.417-3.58 3.503-6.602l-3.656-12.06c-.914-2.996-3.504-4.367-6.576-3.479-1.295.381-2.285 1.092-2.92 2.031-.254-1.853-.406-3.707-.406-5.51 0-13.888 8.48-23.13 21.201-23.13 12.72 0 21.227 9.242 21.227 23.13 0 1.803-.127 3.657-.407 5.51-.634-.914-1.625-1.625-2.945-2.03-3.047-.89-5.637.482-6.55 3.478L39.608 51.2c-.94 3.047.457 5.662 3.478 6.602 2.438.71 4.57-.026 5.79-1.828 1.294.609 2.64.228 3.351-1.016 3.758-6.576 6.018-15.082 6.018-22.775C58.246 15.248 47.759 4 31.94 4 16.148 4 5.687 15.248 5.687 32.184Z" />,
  );