import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgStarIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M18.467 22.498a.75.75 0 0 1-.44-.141l-6.028-4.37-6.028 4.37a.75.75 0 0 1-1.151-.848l2.35-6.963-6.093-4.179A.75.75 0 0 1 1.5 8.998h7.517l2.268-6.981a.75.75 0 0 1 1.427 0L14.979 9h7.517a.75.75 0 0 1 .424 1.368l-6.096 4.176 2.35 6.962a.75.75 0 0 1-.71.99l.003.002Z" />
  </Svg>
);

export const StarIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M18.467 22.498a.75.75 0 0 1-.44-.141l-6.028-4.37-6.028 4.37a.75.75 0 0 1-1.151-.848l2.35-6.963-6.093-4.179A.75.75 0 0 1 1.5 8.998h7.517l2.268-6.981a.75.75 0 0 1 1.427 0L14.979 9h7.517a.75.75 0 0 1 .424 1.368l-6.096 4.176 2.35 6.962a.75.75 0 0 1-.71.99l.003.002Z" />,
  );
