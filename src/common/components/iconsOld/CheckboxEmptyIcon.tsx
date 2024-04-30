import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckboxEmptyIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M4.153 14.352h7.687c1.371 0 2.082-.71 2.082-2.063V4.564c0-1.358-.71-2.063-2.082-2.063H4.153c-1.37 0-2.082.705-2.082 2.063v7.725c0 1.359.711 2.063 2.082 2.063Zm.076-1.244c-.59 0-.914-.311-.914-.927V4.666c0-.616.324-.92.914-.92h7.535c.584 0 .914.304.914.92v7.515c0 .616-.33.927-.914.927H4.23Z" />
  </Svg>
);

export const CheckboxEmptyIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M4.153 14.352h7.687c1.371 0 2.082-.71 2.082-2.063V4.564c0-1.358-.71-2.063-2.082-2.063H4.153c-1.37 0-2.082.705-2.082 2.063v7.725c0 1.359.711 2.063 2.082 2.063Zm.076-1.244c-.59 0-.914-.311-.914-.927V4.666c0-.616.324-.92.914-.92h7.535c.584 0 .914.304.914.92v7.515c0 .616-.33.927-.914.927H4.23Z" />,
  );
