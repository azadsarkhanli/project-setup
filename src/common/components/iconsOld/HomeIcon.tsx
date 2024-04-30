import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgHomeIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      d="M7.897 13.692H4V7.456L9.067 2l5.066 5.456v6.236h-3.897"
      strokeWidth={1.462}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HomeIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      d="M7.897 13.692H4V7.456L9.067 2l5.066 5.456v6.236h-3.897"
      strokeWidth={1.462}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  );
