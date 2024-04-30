import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgContrastIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 1.5c-5.8 0-10.5 4.7-10.5 10.499a10.5 10.5 0 0 0 3.075 7.423c4.08 4.12 10.728 4.153 14.848.073 4.12-4.08 4.152-10.728.072-14.848A10.428 10.428 0 0 0 11.997 1.5H12Zm-9 10.499c0-4.962 4.038-9 9-9v17.999c-4.962 0-9-4.037-9-9Z" />
  </Svg>
);

export const ContrastIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 1.5c-5.8 0-10.5 4.7-10.5 10.499a10.5 10.5 0 0 0 3.075 7.423c4.08 4.12 10.728 4.153 14.848.073 4.12-4.08 4.152-10.728.072-14.848A10.428 10.428 0 0 0 11.997 1.5H12Zm-9 10.499c0-4.962 4.038-9 9-9v17.999c-4.962 0-9-4.037-9-9Z" />,
  );
