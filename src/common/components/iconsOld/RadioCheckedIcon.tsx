import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRadioCheckedIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Circle cx={8} cy={8} r={7.5} fill="#627F79" stroke="#627F79" />
    <Path d="m4 8 2.5 3L12 5.5" stroke="#FFF6EE" />
  </Svg>
);

export const RadioCheckedIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Circle cx={8} cy={8} r={7.5} fill="#627F79" stroke="#627F79" />,
    <Path d="m4 8 2.5 3L12 5.5" stroke="#FFF6EE" />,
  );
