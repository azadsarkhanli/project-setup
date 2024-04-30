import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronRightIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M12.294 8.417a.77.77 0 0 0-.247-.565L7.095 3.01a.699.699 0 0 0-.514-.21.729.729 0 0 0-.742.73c0 .203.082.388.222.534l4.469 4.354-4.47 4.354a.766.766 0 0 0-.221.527c0 .42.33.737.742.737a.7.7 0 0 0 .514-.21l4.952-4.843a.748.748 0 0 0 .247-.565Z" />
  </Svg>
);

export const ChevronRightIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M12.294 8.417a.77.77 0 0 0-.247-.565L7.095 3.01a.699.699 0 0 0-.514-.21.729.729 0 0 0-.742.73c0 .203.082.388.222.534l4.469 4.354-4.47 4.354a.766.766 0 0 0-.221.527c0 .42.33.737.742.737a.7.7 0 0 0 .514-.21l4.952-4.843a.748.748 0 0 0 .247-.565Z" />,
  );
