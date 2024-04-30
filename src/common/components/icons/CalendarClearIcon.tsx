import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCalendarClearIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M22.5 6a3 3 0 0 0-3-3h-.75v-.729c0-.404-.31-.75-.714-.77a.75.75 0 0 0-.786.713V3H6.75v-.73c0-.403-.31-.75-.714-.77a.75.75 0 0 0-.786.713l-.001.036V3h-.75a3 3 0 0 0-3 3v.563c0 .103.084.187.188.187H22.31a.188.188 0 0 0 .188-.187L22.5 6ZM1.5 19.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.437a.188.188 0 0 0-.188-.187H1.688a.187.187 0 0 0-.187.187V19.5Z" />
  </Svg>
);

export const CalendarClearIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M22.5 6a3 3 0 0 0-3-3h-.75v-.729c0-.404-.31-.75-.714-.77a.75.75 0 0 0-.786.713V3H6.75v-.73c0-.403-.31-.75-.714-.77a.75.75 0 0 0-.786.713l-.001.036V3h-.75a3 3 0 0 0-3 3v.563c0 .103.084.187.188.187H22.31a.188.188 0 0 0 .188-.187L22.5 6ZM1.5 19.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.437a.188.188 0 0 0-.188-.187H1.688a.187.187 0 0 0-.187.187V19.5Z" />,
  );
