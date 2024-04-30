import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgVolumeOffOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.455 4.71a1.124 1.124 0 0 1 1.793.904V18.381c0 .237-.075.471-.218.666v.001a1.125 1.125 0 0 1-1.604.216l-4.288-3.516H7.874a1.125 1.125 0 0 1-1.125-1.125V9.374c0-.621.504-1.125 1.125-1.125h3.264l.002-.002 4.285-3.513a.694.694 0 0 1 .03-.024Zm-4.262 5.037a.749.749 0 0 1-.054.002h-2.89v4.5h2.89c.346 0 .682.12.95.34l3.659 3V6.408L12.086 9.41a1.505 1.505 0 0 1-.893.336Z"
    />
  </Svg>
);

export const VolumeOffOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.455 4.71a1.124 1.124 0 0 1 1.793.904V18.381c0 .237-.075.471-.218.666v.001a1.125 1.125 0 0 1-1.604.216l-4.288-3.516H7.874a1.125 1.125 0 0 1-1.125-1.125V9.374c0-.621.504-1.125 1.125-1.125h3.264l.002-.002 4.285-3.513a.694.694 0 0 1 .03-.024Zm-4.262 5.037a.749.749 0 0 1-.054.002h-2.89v4.5h2.89c.346 0 .682.12.95.34l3.659 3V6.408L12.086 9.41a1.505 1.505 0 0 1-.893.336Z"
    />,
  );
