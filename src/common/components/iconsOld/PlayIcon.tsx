import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlayIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#a)">
      <Path d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8Zm-1.49-4.84c-.377.228-.808.048-.808-.344V5.192c0-.384.463-.549.808-.345l4.604 2.73a.504.504 0 0 1 0 .87L6.51 11.161Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const PlayIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <G clipPath="url(#a)">
      <Path d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8Zm-1.49-4.84c-.377.228-.808.048-.808-.344V5.192c0-.384.463-.549.808-.345l4.604 2.73a.504.504 0 0 1 0 .87L6.51 11.161Z" />
    </G>,
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>,
  );
