import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgReaderIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M17.248 1.5H6.75a3.002 3.002 0 0 0-3 3v14.998a3.003 3.003 0 0 0 3 3h10.5a3.003 3.003 0 0 0 2.999-3V4.5a3.003 3.003 0 0 0-3-3Zm-5.25 12.748H8.25a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 0 1.5Zm3.75-3.75H8.25a.75.75 0 0 1 0-1.499h7.5a.75.75 0 0 1 0 1.5Zm0-3.749H8.25a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5Z" />
  </Svg>
);

export const ReaderIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M17.248 1.5H6.75a3.002 3.002 0 0 0-3 3v14.998a3.003 3.003 0 0 0 3 3h10.5a3.003 3.003 0 0 0 2.999-3V4.5a3.003 3.003 0 0 0-3-3Zm-5.25 12.748H8.25a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 0 1.5Zm3.75-3.75H8.25a.75.75 0 0 1 0-1.499h7.5a.75.75 0 0 1 0 1.5Zm0-3.749H8.25a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5Z" />,
  );
