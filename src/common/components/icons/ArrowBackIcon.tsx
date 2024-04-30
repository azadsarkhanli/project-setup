import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgArrowBackIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.232 6.045a1.125 1.125 0 1 0-1.591-1.59l-6.75 6.748c-.439.44-.439 1.152 0 1.591l6.75 6.75a1.125 1.125 0 1 0 1.59-1.591l-4.828-4.83H19.31a1.125 1.125 0 0 0 0-2.25H7.403l4.829-4.828Z"
    />
  </Svg>
);

export const ArrowBackIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.232 6.045a1.125 1.125 0 1 0-1.591-1.59l-6.75 6.748c-.439.44-.439 1.152 0 1.591l6.75 6.75a1.125 1.125 0 1 0 1.59-1.591l-4.828-4.83H19.31a1.125 1.125 0 0 0 0-2.25H7.403l4.829-4.828Z"
    />,
  );
