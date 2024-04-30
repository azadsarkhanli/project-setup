import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPauseIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#a)">
      <Path d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8Zm-2.282-4.847c-.4 0-.58-.22-.58-.533V5.365c0-.306.18-.526.58-.526h.792c.408 0 .588.22.588.526v5.255c0 .313-.18.533-.588.533h-.792Zm3.788 0c-.408 0-.588-.22-.588-.533V5.365c0-.306.18-.526.588-.526h.792c.392 0 .573.22.573.526v5.255c0 .313-.18.533-.573.533h-.792Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const PauseIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <G clipPath="url(#a)">
      <Path d="M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8Zm-2.282-4.847c-.4 0-.58-.22-.58-.533V5.365c0-.306.18-.526.58-.526h.792c.408 0 .588.22.588.526v5.255c0 .313-.18.533-.588.533h-.792Zm3.788 0c-.408 0-.588-.22-.588-.533V5.365c0-.306.18-.526.588-.526h.792c.392 0 .573.22.573.526v5.255c0 .313-.18.533-.573.533h-.792Z" />
    </G>,
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>,
  );
