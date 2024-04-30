import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgStopIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.373 20.248H5.624a1.875 1.875 0 0 1-1.874-1.875V5.624c0-1.035.838-1.874 1.874-1.874h12.749c1.035 0 1.875.839 1.875 1.874v12.749c0 1.035-.84 1.875-1.875 1.875Z" />
  </Svg>
);

export const StopIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.373 20.248H5.624a1.875 1.875 0 0 1-1.874-1.875V5.624c0-1.035.838-1.874 1.874-1.874h12.749c1.035 0 1.875.839 1.875 1.874v12.749c0 1.035-.84 1.875-1.875 1.875Z" />,
  );
