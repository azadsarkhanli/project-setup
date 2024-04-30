import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloseIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="m13.59 11.999 4.452-4.453a1.126 1.126 0 0 0-1.59-1.594l-4.453 4.453-4.453-4.453a1.127 1.127 0 1 0-1.594 1.594l4.453 4.453-4.453 4.452a1.127 1.127 0 1 0 1.594 1.594l4.453-4.453 4.452 4.453a1.128 1.128 0 0 0 1.594-1.594L13.589 12Z" />
  </Svg>
);

export const CloseIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="m13.59 11.999 4.452-4.453a1.126 1.126 0 0 0-1.59-1.594l-4.453 4.453-4.453-4.453a1.127 1.127 0 1 0-1.594 1.594l4.453 4.453-4.453 4.452a1.127 1.127 0 1 0 1.594 1.594l4.453-4.453 4.452 4.453a1.128 1.128 0 0 0 1.594-1.594L13.589 12Z" />,
  );
