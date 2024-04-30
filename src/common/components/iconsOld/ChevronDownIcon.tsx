import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronDownIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M7.583 12.294a.77.77 0 0 0 .565-.247l4.843-4.952c.14-.14.21-.31.21-.514a.729.729 0 0 0-.73-.742.765.765 0 0 0-.534.222L7.583 10.53 3.229 6.06a.766.766 0 0 0-.527-.221.73.73 0 0 0-.737.742c0 .203.07.375.21.514l4.843 4.952c.165.171.35.247.565.247Z" />
  </Svg>
);

export const ChevronDownIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M7.583 12.294a.77.77 0 0 0 .565-.247l4.843-4.952c.14-.14.21-.31.21-.514a.729.729 0 0 0-.73-.742.765.765 0 0 0-.534.222L7.583 10.53 3.229 6.06a.766.766 0 0 0-.527-.221.73.73 0 0 0-.737.742c0 .203.07.375.21.514l4.843 4.952c.165.171.35.247.565.247Z" />,
  );
