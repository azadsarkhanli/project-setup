import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDocumentIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M20.063 10.5H13.5a2.25 2.25 0 0 1-2.25-2.25V1.687a.188.188 0 0 0-.188-.187H6.75a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-8.813a.188.188 0 0 0-.188-.187Z" />
    <Path d="M19.65 8.84 12.91 2.1a.094.094 0 0 0-.16.065V8.25c0 .413.335.75.75.75h6.084a.094.094 0 0 0 .094-.095.097.097 0 0 0-.028-.066v.001Z" />
  </Svg>
);

export const DocumentIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M20.063 10.5H13.5a2.25 2.25 0 0 1-2.25-2.25V1.687a.188.188 0 0 0-.188-.187H6.75a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-8.813a.188.188 0 0 0-.188-.187Z" />,
    <Path d="M19.65 8.84 12.91 2.1a.094.094 0 0 0-.16.065V8.25c0 .413.335.75.75.75h6.084a.094.094 0 0 0 .094-.095.097.097 0 0 0-.028-.066v.001Z" />,
  );
