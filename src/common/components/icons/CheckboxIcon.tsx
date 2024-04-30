import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckboxIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M19.615 1H4.385A3.387 3.387 0 0 0 1 4.385v15.23A3.388 3.388 0 0 0 4.385 23h15.23A3.388 3.388 0 0 0 23 19.615V4.385A3.388 3.388 0 0 0 19.615 1Zm-1.89 7.313-7.108 8.462a.85.85 0 0 1-.635.302h-.014a.847.847 0 0 1-.629-.28l-3.046-3.385a.846.846 0 1 1 1.23-1.161l.027.029 2.395 2.66 6.483-7.715a.845.845 0 0 1 1.295 1.087l.002.001Z" />
  </Svg>
);

export const CheckboxIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M19.615 1H4.385A3.387 3.387 0 0 0 1 4.385v15.23A3.388 3.388 0 0 0 4.385 23h15.23A3.388 3.388 0 0 0 23 19.615V4.385A3.388 3.388 0 0 0 19.615 1Zm-1.89 7.313-7.108 8.462a.85.85 0 0 1-.635.302h-.014a.847.847 0 0 1-.629-.28l-3.046-3.385a.846.846 0 1 1 1.23-1.161l.027.029 2.395 2.66 6.483-7.715a.845.845 0 0 1 1.295 1.087l.002.001Z" />,
  );
