import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBackwardEndIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M3.633 13.666a.53.53 0 0 0 .546-.526V8.67c.07.261.266.496.61.7l6.467 3.808c.26.152.47.235.73.235.502 0 .914-.381.914-1.092V4.526c0-.711-.412-1.092-.914-1.092-.26 0-.47.083-.73.235L4.788 7.478c-.343.203-.54.438-.61.698V3.713a.535.535 0 0 0-.545-.533.534.534 0 0 0-.54.533v9.427c0 .298.241.526.54.526Zm8.08-1.428a.323.323 0 0 1-.158-.057l-6.03-3.58c-.09-.05-.14-.095-.14-.178 0-.089.044-.127.14-.177l6.03-3.58a.322.322 0 0 1 .158-.058c.09 0 .172.064.172.19v7.25c0 .127-.083.19-.172.19Z" />
  </Svg>
);

export const BackwardEndIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M3.633 13.666a.53.53 0 0 0 .546-.526V8.67c.07.261.266.496.61.7l6.467 3.808c.26.152.47.235.73.235.502 0 .914-.381.914-1.092V4.526c0-.711-.412-1.092-.914-1.092-.26 0-.47.083-.73.235L4.788 7.478c-.343.203-.54.438-.61.698V3.713a.535.535 0 0 0-.545-.533.534.534 0 0 0-.54.533v9.427c0 .298.241.526.54.526Zm8.08-1.428a.323.323 0 0 1-.158-.057l-6.03-3.58c-.09-.05-.14-.095-.14-.178 0-.089.044-.127.14-.177l6.03-3.58a.322.322 0 0 1 .158-.058c.09 0 .172.064.172.19v7.25c0 .127-.083.19-.172.19Z" />,
  );