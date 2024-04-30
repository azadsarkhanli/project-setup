import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSearchIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M1.745 6.606a5.172 5.172 0 0 0 5.167 5.167c1.06 0 2.032-.324 2.844-.876l2.92 2.92a.924.924 0 0 0 .673.267c.54 0 .927-.407.927-.934a.946.946 0 0 0-.26-.666l-2.901-2.907a5.05 5.05 0 0 0 .964-2.971 5.172 5.172 0 0 0-5.167-5.167 5.172 5.172 0 0 0-5.167 5.167Zm1.346 0a3.821 3.821 0 1 1 7.642 0 3.821 3.821 0 0 1-7.642 0Z" />
  </Svg>
);

export const SearchIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M1.745 6.606a5.172 5.172 0 0 0 5.167 5.167c1.06 0 2.032-.324 2.844-.876l2.92 2.92a.924.924 0 0 0 .673.267c.54 0 .927-.407.927-.934a.946.946 0 0 0-.26-.666l-2.901-2.907a5.05 5.05 0 0 0 .964-2.971 5.172 5.172 0 0 0-5.167-5.167 5.172 5.172 0 0 0-5.167 5.167Zm1.346 0a3.821 3.821 0 1 1 7.642 0 3.821 3.821 0 0 1-7.642 0Z" />,
  );
