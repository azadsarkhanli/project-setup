import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgStopOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.624 5.25a.375.375 0 0 0-.375.374v12.749c0 .207.168.375.375.375h12.749a.375.375 0 0 0 .375-.375V5.624a.375.375 0 0 0-.375-.375H5.624Zm-1.874.374c0-1.035.839-1.874 1.874-1.874h12.749c1.035 0 1.875.839 1.875 1.874v12.749c0 1.035-.84 1.875-1.875 1.875H5.624a1.875 1.875 0 0 1-1.874-1.875V5.624Z"
    />
  </Svg>
);

export const StopOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.624 5.25a.375.375 0 0 0-.375.374v12.749c0 .207.168.375.375.375h12.749a.375.375 0 0 0 .375-.375V5.624a.375.375 0 0 0-.375-.375H5.624Zm-1.874.374c0-1.035.839-1.874 1.874-1.874h12.749c1.035 0 1.875.839 1.875 1.874v12.749c0 1.035-.84 1.875-1.875 1.875H5.624a1.875 1.875 0 0 1-1.874-1.875V5.624Z"
    />,
  );
