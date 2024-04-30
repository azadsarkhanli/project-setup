import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgFolderOpenIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.816 4.5h7.307c1.447 0 2.625.802 2.625 2.25H2.25V5.623A2.627 2.627 0 0 1 4.874 3h3.557a2.61 2.61 0 0 1 1.458.44l1.304.872c.184.123.401.188.623.187ZM4.136 20.998h15.725l-.001-.001a2.625 2.625 0 0 0 2.621-2.585l.76-7.721v-.014a2.25 2.25 0 0 0-2.24-2.429H3a2.25 2.25 0 0 0-2.24 2.43v.013l.756 7.722a2.625 2.625 0 0 0 2.621 2.585Z" />
  </Svg>
);

export const FolderOpenIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.816 4.5h7.307c1.447 0 2.625.802 2.625 2.25H2.25V5.623A2.627 2.627 0 0 1 4.874 3h3.557a2.61 2.61 0 0 1 1.458.44l1.304.872c.184.123.401.188.623.187ZM4.136 20.998h15.725l-.001-.001a2.625 2.625 0 0 0 2.621-2.585l.76-7.721v-.014a2.25 2.25 0 0 0-2.24-2.429H3a2.25 2.25 0 0 0-2.24 2.43v.013l.756 7.722a2.625 2.625 0 0 0 2.621 2.585Z" />,
  );
