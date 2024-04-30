import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloseIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M2.822 13.33a.723.723 0 0 0 1.003.006l3.904-3.903 3.903 3.903a.717.717 0 0 0 1.003-.006.715.715 0 0 0 .007-.996l-3.904-3.91 3.904-3.904a.709.709 0 0 0-.007-.997.723.723 0 0 0-1.003-.006L7.73 7.42 3.825 3.517a.723.723 0 0 0-1.003 0 .723.723 0 0 0 0 1.003l3.904 3.903-3.904 3.91a.715.715 0 0 0 0 .997Z" />
  </Svg>
);

export const CloseIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M2.822 13.33a.723.723 0 0 0 1.003.006l3.904-3.903 3.903 3.903a.717.717 0 0 0 1.003-.006.715.715 0 0 0 .007-.996l-3.904-3.91 3.904-3.904a.709.709 0 0 0-.007-.997.723.723 0 0 0-1.003-.006L7.73 7.42 3.825 3.517a.723.723 0 0 0-1.003 0 .723.723 0 0 0 0 1.003l3.904 3.903-3.904 3.91a.715.715 0 0 0 0 .997Z" />,
  );
