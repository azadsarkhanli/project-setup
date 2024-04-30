import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgStopCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.75 12.298c-.002.663-.538 1.2-1.2 1.2h-5.1c-.663 0-1.2-.537-1.2-1.2V9.45a1.2 1.2 0 0 1 1.2-1.2h5.1c.662 0 1.198.537 1.2 1.2v5.1Z" />
  </Svg>
);

export const StopCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.75 12.298c-.002.663-.538 1.2-1.2 1.2h-5.1c-.663 0-1.2-.537-1.2-1.2V9.45a1.2 1.2 0 0 1 1.2-1.2h5.1c.662 0 1.198.537 1.2 1.2v5.1Z" />,
  );
