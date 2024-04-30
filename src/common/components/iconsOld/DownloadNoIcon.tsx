import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDownloadNoIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8 14.974c-3.586 0-6.557-2.964-6.557-6.557 0-3.586 2.97-6.557 6.563-6.557 3.587 0 6.551 2.97 6.551 6.557 0 3.593-2.97 6.557-6.557 6.557Zm0-1.289a5.25 5.25 0 0 0 5.262-5.268 5.24 5.24 0 0 0-5.256-5.262 5.26 5.26 0 0 0-5.275 5.262A5.256 5.256 0 0 0 8 13.685Zm0-8.518c.317 0 .559.229.559.546v3.002L8.5 10.017l.578-.711.711-.743a.517.517 0 0 1 .38-.165.5.5 0 0 1 .521.508c0 .152-.05.28-.152.38l-2.095 2.12c-.14.147-.273.21-.444.21-.178 0-.311-.07-.45-.21l-2.095-2.12a.517.517 0 0 1-.153-.38.5.5 0 0 1 .52-.508c.153 0 .293.057.382.165l.71.736.578.724-.05-1.308V5.713c0-.317.234-.546.558-.546Z" />
  </Svg>
);

export const DownloadNoIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8 14.974c-3.586 0-6.557-2.964-6.557-6.557 0-3.586 2.97-6.557 6.563-6.557 3.587 0 6.551 2.97 6.551 6.557 0 3.593-2.97 6.557-6.557 6.557Zm0-1.289a5.25 5.25 0 0 0 5.262-5.268 5.24 5.24 0 0 0-5.256-5.262 5.26 5.26 0 0 0-5.275 5.262A5.256 5.256 0 0 0 8 13.685Zm0-8.518c.317 0 .559.229.559.546v3.002L8.5 10.017l.578-.711.711-.743a.517.517 0 0 1 .38-.165.5.5 0 0 1 .521.508c0 .152-.05.28-.152.38l-2.095 2.12c-.14.147-.273.21-.444.21-.178 0-.311-.07-.45-.21l-2.095-2.12a.517.517 0 0 1-.153-.38.5.5 0 0 1 .52-.508c.153 0 .293.057.382.165l.71.736.578.724-.05-1.308V5.713c0-.317.234-.546.558-.546Z" />,
  );
