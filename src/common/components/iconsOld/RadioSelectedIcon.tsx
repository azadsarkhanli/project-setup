import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRadioSelectedIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Circle cx={8} cy={8} r={7.5} fill="#FFF6EE" stroke="#627F79" />
    <Circle cx={8} cy={8} r={3} fill="#627F79" />
  </Svg>
);

export const RadioSelectedIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Circle cx={8} cy={8} r={7.5} fill="#FFF6EE" stroke="#627F79" />,
    <Circle cx={8} cy={8} r={3} fill="#627F79" />,
  );
