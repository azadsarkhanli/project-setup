import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckboxIndeterminateIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.385 1h15.23A3.388 3.388 0 0 1 23 4.385v15.23A3.388 3.388 0 0 1 19.615 23H4.385A3.388 3.388 0 0 1 1 19.615V4.385A3.387 3.387 0 0 1 4.385 1Zm.865 10h13.498c.415 0 .75.448.75 1s-.335 1-.75 1H5.25c-.414 0-.75-.448-.75-1s.336-1 .75-1Z"
    />
  </Svg>
);

export const CheckboxIndeterminateIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.385 1h15.23A3.388 3.388 0 0 1 23 4.385v15.23A3.388 3.388 0 0 1 19.615 23H4.385A3.388 3.388 0 0 1 1 19.615V4.385A3.387 3.387 0 0 1 4.385 1Zm.865 10h13.498c.415 0 .75.448.75 1s-.335 1-.75 1H5.25c-.414 0-.75-.448-.75-1s.336-1 .75-1Z"
    />,
  );
