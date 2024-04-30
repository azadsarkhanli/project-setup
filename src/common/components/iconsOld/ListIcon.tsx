import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgListIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.817 7.373a1.464 1.464 0 1 0 0-2.929 1.464 1.464 0 0 0 0 2.929Zm0 4.183a1.464 1.464 0 1 0 0-2.929 1.464 1.464 0 0 0 0 2.929Zm3.137-5.648c0-.346.28-.627.627-.627h5.438a.628.628 0 0 1 0 1.255H7.581a.627.627 0 0 1-.627-.628Zm.627 3.556a.627.627 0 0 0 0 1.255h5.438a.627.627 0 1 0 0-1.255H7.581Z"
    />
  </Svg>
);

export const ListIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.817 7.373a1.464 1.464 0 1 0 0-2.929 1.464 1.464 0 0 0 0 2.929Zm0 4.183a1.464 1.464 0 1 0 0-2.929 1.464 1.464 0 0 0 0 2.929Zm3.137-5.648c0-.346.28-.627.627-.627h5.438a.628.628 0 0 1 0 1.255H7.581a.627.627 0 0 1-.627-.628Zm.627 3.556a.627.627 0 0 0 0 1.255h5.438a.627.627 0 1 0 0-1.255H7.581Z"
    />,
  );
