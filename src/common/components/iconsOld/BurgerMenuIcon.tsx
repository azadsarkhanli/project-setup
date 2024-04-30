import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgBurgerMenuIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M2.19 5.714h11.864a.574.574 0 1 0 0-1.149H2.19a.569.569 0 0 0-.571.572c0 .31.254.577.57.577Zm0 2.857h11.864a.578.578 0 0 0 0-1.155H2.19A.576.576 0 0 0 1.619 8c0 .31.254.57.57.57Zm0 2.863h11.864c.317 0 .577-.26.577-.584a.574.574 0 0 0-.577-.572H2.19a.573.573 0 0 0-.571.572.58.58 0 0 0 .57.584Z" />
  </Svg>
);

export const BurgerMenuIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M2.19 5.714h11.864a.574.574 0 1 0 0-1.149H2.19a.569.569 0 0 0-.571.572c0 .31.254.577.57.577Zm0 2.857h11.864a.578.578 0 0 0 0-1.155H2.19A.576.576 0 0 0 1.619 8c0 .31.254.57.57.57Zm0 2.863h11.864c.317 0 .577-.26.577-.584a.574.574 0 0 0-.577-.572H2.19a.573.573 0 0 0-.571.572.58.58 0 0 0 .57.584Z" />,
  );
