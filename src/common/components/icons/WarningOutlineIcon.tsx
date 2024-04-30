import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgWarningOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 18.619a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875ZM10.979 9.152a1.02 1.02 0 0 1 1.01-1.024h.006a1.152 1.152 0 0 1 .062.002c.558.032.984.507.96 1.063v.002l-.27 5.716a.75.75 0 0 1-1.497 0l-.268-5.682a.745.745 0 0 1-.003-.072v-.005Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.017 3.514c.85-1.578 3.113-1.578 3.962 0l7.988 14.835c.177.328.268.694.27 1.065v.001a2.25 2.25 0 0 1-2.24 2.25H4.012a2.255 2.255 0 0 1-1.066-.27h-.001a2.25 2.25 0 0 1-.914-3.047l.003-.007 7.984-14.827Zm9.961 16.652h.008a.75.75 0 0 0 .66-1.106L12.66 4.225a.75.75 0 0 0-1.321 0L3.35 19.06l-.002.005a.75.75 0 0 0 .662 1.1c.015 0 .03 0 .046.002h15.922Z"
    />
  </Svg>
);

export const WarningOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 18.619a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875ZM10.979 9.152a1.02 1.02 0 0 1 1.01-1.024h.006a1.152 1.152 0 0 1 .062.002c.558.032.984.507.96 1.063v.002l-.27 5.716a.75.75 0 0 1-1.497 0l-.268-5.682a.745.745 0 0 1-.003-.072v-.005Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.017 3.514c.85-1.578 3.113-1.578 3.962 0l7.988 14.835c.177.328.268.694.27 1.065v.001a2.25 2.25 0 0 1-2.24 2.25H4.012a2.255 2.255 0 0 1-1.066-.27h-.001a2.25 2.25 0 0 1-.914-3.047l.003-.007 7.984-14.827Zm9.961 16.652h.008a.75.75 0 0 0 .66-1.106L12.66 4.225a.75.75 0 0 0-1.321 0L3.35 19.06l-.002.005a.75.75 0 0 0 .662 1.1c.015 0 .03 0 .046.002h15.922Z"
    />,
  );
