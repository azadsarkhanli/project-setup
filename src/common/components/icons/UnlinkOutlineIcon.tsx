import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgUnlinkOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M3.094 11.998a3.656 3.656 0 0 1 3.655-3.655h3a.844.844 0 1 0 0-1.688h-3a5.343 5.343 0 1 0 0 10.687h3a.844.844 0 1 0 0-1.688h-3A3.656 3.656 0 0 1 3.094 12ZM14.249 6.655a.844.844 0 0 0 0 1.688h3a3.656 3.656 0 0 1 0 7.311h-3a.844.844 0 0 0 0 1.688h3a5.344 5.344 0 0 0 0-10.687h-3Z" />
  </Svg>
);

export const UnlinkOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M3.094 11.998a3.656 3.656 0 0 1 3.655-3.655h3a.844.844 0 1 0 0-1.688h-3a5.343 5.343 0 1 0 0 10.687h3a.844.844 0 1 0 0-1.688h-3A3.656 3.656 0 0 1 3.094 12ZM14.249 6.655a.844.844 0 0 0 0 1.688h3a3.656 3.656 0 0 1 0 7.311h-3a.844.844 0 0 0 0 1.688h3a5.344 5.344 0 0 0 0-10.687h-3Z" />,
  );
