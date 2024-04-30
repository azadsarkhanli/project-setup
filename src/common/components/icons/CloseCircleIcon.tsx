import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloseCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.53 12.218a.75.75 0 1 1-1.061 1.06l-2.47-2.47-2.47 2.47a.75.75 0 0 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06l-2.47 2.47 2.47 2.47Z" />
  </Svg>
);

export const CloseCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm3.53 12.218a.75.75 0 1 1-1.061 1.06l-2.47-2.47-2.47 2.47a.75.75 0 0 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06l-2.47 2.47 2.47 2.47Z" />,
  );
