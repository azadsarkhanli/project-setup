import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAlertCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm0 14.994a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.018-9.428-.27 5.718a.75.75 0 0 1-1.5 0L10.98 7.82v-.002a1.02 1.02 0 1 1 2.035-.001h.003Z" />
  </Svg>
);

export const AlertCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.25c-5.376 0-9.75 4.373-9.75 9.749 0 5.375 4.374 9.749 9.75 9.749 5.375 0 9.749-4.374 9.749-9.75 0-5.375-4.374-9.748-9.75-9.748Zm0 14.994a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.018-9.428-.27 5.718a.75.75 0 0 1-1.5 0L10.98 7.82v-.002a1.02 1.02 0 1 1 2.035-.001h.003Z" />,
  );
