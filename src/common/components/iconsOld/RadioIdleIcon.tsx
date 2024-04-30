import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Mask, Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRadioIdleIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Mask id="a" fill="#fff">
      <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" />
    </Mask>
    <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" fill="#FFF6EE" />
    <Path
      d="M15 8a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7 7a7 7 0 0 1-7-7h-2a9 9 0 0 0 9 9v-2ZM1 8a7 7 0 0 1 7-7v-2a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Z"
      fill="#627F79"
      mask="url(#a)"
    />
  </Svg>
);

export const RadioIdleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Mask id="a" fill="#fff">
      <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" />
    </Mask>,
    <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" fill="#FFF6EE" />,
    <Path
      d="M15 8a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7 7a7 7 0 0 1-7-7h-2a9 9 0 0 0 9 9v-2ZM1 8a7 7 0 0 1 7-7v-2a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Z"
      fill="#627F79"
      mask="url(#a)"
    />,
  );
