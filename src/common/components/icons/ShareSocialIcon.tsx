import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgShareSocialIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M17.998 15.748c-.816 0-1.598.334-2.162.924L8.9 12.769a3 3 0 0 0 0-1.54l6.936-3.903a2.99 2.99 0 1 0 4.304-4.153 2.99 2.99 0 0 0-5.042 2.846L8.162 9.92a3 3 0 1 0-.001 4.152l6.936 3.903a2.999 2.999 0 1 0 2.898-2.23l.003.002Z" />
  </Svg>
);

export const ShareSocialIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M17.998 15.748c-.816 0-1.598.334-2.162.924L8.9 12.769a3 3 0 0 0 0-1.54l6.936-3.903a2.99 2.99 0 1 0 4.304-4.153 2.99 2.99 0 0 0-5.042 2.846L8.162 9.92a3 3 0 1 0-.001 4.152l6.936 3.903a2.999 2.999 0 1 0 2.898-2.23l.003.002Z" />,
  );
