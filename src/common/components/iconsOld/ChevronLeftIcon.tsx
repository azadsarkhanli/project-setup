import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronLeftIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M3.706 7.583c0 .216.082.4.247.565l4.952 4.843c.14.14.31.21.514.21a.729.729 0 0 0 .742-.73.766.766 0 0 0-.222-.534L5.47 7.583l4.47-4.354a.766.766 0 0 0 .221-.527.73.73 0 0 0-.742-.737.699.699 0 0 0-.514.21L3.953 7.018a.748.748 0 0 0-.247.565Z" />
  </Svg>
);

export const ChevronLeftIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M3.706 7.583c0 .216.082.4.247.565l4.952 4.843c.14.14.31.21.514.21a.729.729 0 0 0 .742-.73.766.766 0 0 0-.222-.534L5.47 7.583l4.47-4.354a.766.766 0 0 0 .221-.527.73.73 0 0 0-.742-.737.699.699 0 0 0-.514.21L3.953 7.018a.748.748 0 0 0-.247.565Z" />,
  );
