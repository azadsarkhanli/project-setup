import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgMoonIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M12.374 22.498C6.368 22.498 1.5 17.629 1.5 11.624c0-4.406 2.53-8.356 6.45-10.062a.75.75 0 0 1 .987.987c-.45 1.033-.688 2.356-.688 3.825 0 5.169 4.205 9.374 9.374 9.374 1.469 0 2.792-.238 3.825-.688a.75.75 0 0 1 .987.987c-1.705 3.919-5.656 6.45-10.061 6.45Z" />
  </Svg>
);

export const MoonIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M12.374 22.498C6.368 22.498 1.5 17.629 1.5 11.624c0-4.406 2.53-8.356 6.45-10.062a.75.75 0 0 1 .987.987c-.45 1.033-.688 2.356-.688 3.825 0 5.169 4.205 9.374 9.374 9.374 1.469 0 2.792-.238 3.825-.688a.75.75 0 0 1 .987.987c-1.705 3.919-5.656 6.45-10.061 6.45Z" />,
  );
