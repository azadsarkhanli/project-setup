import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCalendarClearOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V6a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6v13.5ZM22.5 6a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6Z" />
    <Path d="M5.25 2.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0ZM17.25 2.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0ZM21.75 6.75H2.25a.75.75 0 1 0 0 1.5h19.5a.75.75 0 0 0 0-1.5Z" />
  </Svg>
);

export const CalendarClearOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V6a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 6v13.5ZM22.5 6a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6Z" />,
    <Path d="M5.25 2.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0ZM17.25 2.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0ZM21.75 6.75H2.25a.75.75 0 1 0 0 1.5h19.5a.75.75 0 0 0 0-1.5Z" />,
  );
