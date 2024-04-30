import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckboxUncheckedOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.385 1A3.385 3.385 0 0 0 1 4.385v15.23A3.385 3.385 0 0 0 4.385 23h15.23A3.385 3.385 0 0 0 23 19.615V4.385A3.385 3.385 0 0 0 19.615 1H4.385ZM2.692 4.385c0-.935.758-1.693 1.693-1.693h15.23c.935 0 1.693.758 1.693 1.693v15.23c0 .935-.758 1.693-1.693 1.693H4.385a1.692 1.692 0 0 1-1.693-1.693V4.385Z"
    />
  </Svg>
);

export const CheckboxUncheckedOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.385 1A3.385 3.385 0 0 0 1 4.385v15.23A3.385 3.385 0 0 0 4.385 23h15.23A3.385 3.385 0 0 0 23 19.615V4.385A3.385 3.385 0 0 0 19.615 1H4.385ZM2.692 4.385c0-.935.758-1.693 1.693-1.693h15.23c.935 0 1.693.758 1.693 1.693v15.23c0 .935-.758 1.693-1.693 1.693H4.385a1.692 1.692 0 0 1-1.693-1.693V4.385Z"
    />,
  );
