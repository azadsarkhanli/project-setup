import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDocumentOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.75 10.371V19.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 6.75 3h4.629a.75.75 0 0 1 .53.22l6.62 6.62c.14.14.22.331.22.53v.001Zm1.5 0a2.25 2.25 0 0 0-.66-1.59L12.97 2.157a2.25 2.25 0 0 0-1.591-.659h-4.63a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-9.13l.002.002Z" />
    <Path d="M11.25 2.625V8.25a2.25 2.25 0 0 0 2.25 2.25h5.625a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 1-.75-.75V2.625a.75.75 0 0 0-1.5 0Z" />
  </Svg>
);

export const DocumentOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.75 10.371V19.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 6.75 3h4.629a.75.75 0 0 1 .53.22l6.62 6.62c.14.14.22.331.22.53v.001Zm1.5 0a2.25 2.25 0 0 0-.66-1.59L12.97 2.157a2.25 2.25 0 0 0-1.591-.659h-4.63a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-9.13l.002.002Z" />,
    <Path d="M11.25 2.625V8.25a2.25 2.25 0 0 0 2.25 2.25h5.625a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 1-.75-.75V2.625a.75.75 0 0 0-1.5 0Z" />,
  );
