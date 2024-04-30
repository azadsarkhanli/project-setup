import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAddSquareIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M4.01 13.925h7.686c1.371 0 2.082-.71 2.082-2.063V4.138c0-1.358-.71-2.063-2.082-2.063H4.01c-1.37 0-2.082.705-2.082 2.063v7.726c0 1.358.711 2.063 2.082 2.063Zm.075-1.244c-.59 0-.914-.31-.914-.926V4.239c0-.616.324-.92.914-.92h7.535c.584 0 .914.304.914.92v7.516c0 .615-.33.926-.914.926H4.085Zm.997-4.684c0 .343.248.584.603.584H7.26v1.587c0 .349.248.59.59.59.35 0 .604-.241.604-.59V8.58h1.58c.35 0 .597-.241.597-.584 0-.356-.248-.603-.597-.603h-1.58v-1.58c0-.356-.254-.597-.603-.597a.572.572 0 0 0-.59.596v1.58H5.684a.577.577 0 0 0-.603.604Z" />
  </Svg>
);

export const AddSquareIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M4.01 13.925h7.686c1.371 0 2.082-.71 2.082-2.063V4.138c0-1.358-.71-2.063-2.082-2.063H4.01c-1.37 0-2.082.705-2.082 2.063v7.726c0 1.358.711 2.063 2.082 2.063Zm.075-1.244c-.59 0-.914-.31-.914-.926V4.239c0-.616.324-.92.914-.92h7.535c.584 0 .914.304.914.92v7.516c0 .615-.33.926-.914.926H4.085Zm.997-4.684c0 .343.248.584.603.584H7.26v1.587c0 .349.248.59.59.59.35 0 .604-.241.604-.59V8.58h1.58c.35 0 .597-.241.597-.584 0-.356-.248-.603-.597-.603h-1.58v-1.58c0-.356-.254-.597-.603-.597a.572.572 0 0 0-.59.596v1.58H5.684a.577.577 0 0 0-.603.604Z" />,
  );
