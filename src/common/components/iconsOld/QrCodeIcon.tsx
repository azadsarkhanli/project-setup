import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgQrCodeIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M9.873 7.935h2.678c.927 0 1.378-.451 1.378-1.403V3.897c0-.952-.451-1.402-1.378-1.402H9.873c-.927 0-1.378.45-1.378 1.402v2.635c0 .952.45 1.403 1.378 1.403Zm-6.424 0h2.678c.927 0 1.378-.451 1.378-1.403V3.897c0-.952-.45-1.402-1.378-1.402H3.45c-.927 0-1.384.45-1.384 1.402v2.635c0 .952.457 1.403 1.384 1.403Zm-.032-1.016c-.229 0-.336-.114-.336-.356v-2.71c0-.235.107-.35.336-.35h2.73c.234 0 .349.115.349.35v2.71c0 .242-.115.356-.35.356H3.417Zm6.43 0c-.235 0-.343-.114-.343-.356v-2.71c0-.235.108-.35.343-.35h2.736c.229 0 .336.115.336.35v2.71c0 .242-.107.356-.336.356H9.847Zm-5.63-1.003h1.13c.101 0 .14-.044.14-.159V4.66c0-.108-.039-.146-.14-.146h-1.13c-.102 0-.133.038-.133.146v1.098c0 .115.031.159.133.159Zm6.455 0h1.137c.095 0 .14-.044.14-.159V4.66c0-.108-.045-.146-.14-.146h-1.137c-.101 0-.133.038-.133.146v1.098c0 .115.032.159.133.159ZM3.45 14.358h2.678c.927 0 1.378-.45 1.378-1.402V10.32c0-.952-.45-1.403-1.378-1.403H3.45c-.927 0-1.384.451-1.384 1.403v2.635c0 .952.457 1.402 1.384 1.402Zm5.49-3.738h1.13c.102 0 .14-.045.14-.16V9.364c0-.108-.038-.146-.14-.146H8.94c-.101 0-.133.038-.133.146v1.098c0 .114.032.159.133.159Zm3.396 0h1.137c.101 0 .14-.045.14-.16V9.364c0-.108-.039-.146-.14-.146h-1.137c-.095 0-.127.038-.127.146v1.098c0 .114.032.159.127.159Zm-8.918 2.73c-.229 0-.336-.115-.336-.356v-2.71c0-.242.107-.356.336-.356h2.73c.234 0 .349.114.349.355v2.71c0 .242-.115.356-.35.356H3.417Zm7.236-1.03h1.137c.095 0 .14-.044.14-.158v-1.098c0-.108-.045-.152-.14-.152h-1.137c-.095 0-.127.044-.127.152v1.098c0 .114.032.159.127.159Zm-6.436.02h1.13c.101 0 .14-.038.14-.152v-1.105c0-.108-.039-.146-.14-.146h-1.13c-.102 0-.133.038-.133.146v1.104c0 .115.031.153.133.153Zm4.722 1.676h1.13c.102 0 .14-.039.14-.153V12.76c0-.102-.038-.146-.14-.146H8.94c-.101 0-.133.044-.133.146v1.104c0 .114.032.153.133.153Zm3.396 0h1.137c.101 0 .14-.039.14-.153V12.76c0-.102-.039-.146-.14-.146h-1.137c-.095 0-.127.044-.127.146v1.104c0 .114.032.153.127.153Z" />
  </Svg>
);

export const QrCodeIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M9.873 7.935h2.678c.927 0 1.378-.451 1.378-1.403V3.897c0-.952-.451-1.402-1.378-1.402H9.873c-.927 0-1.378.45-1.378 1.402v2.635c0 .952.45 1.403 1.378 1.403Zm-6.424 0h2.678c.927 0 1.378-.451 1.378-1.403V3.897c0-.952-.45-1.402-1.378-1.402H3.45c-.927 0-1.384.45-1.384 1.402v2.635c0 .952.457 1.403 1.384 1.403Zm-.032-1.016c-.229 0-.336-.114-.336-.356v-2.71c0-.235.107-.35.336-.35h2.73c.234 0 .349.115.349.35v2.71c0 .242-.115.356-.35.356H3.417Zm6.43 0c-.235 0-.343-.114-.343-.356v-2.71c0-.235.108-.35.343-.35h2.736c.229 0 .336.115.336.35v2.71c0 .242-.107.356-.336.356H9.847Zm-5.63-1.003h1.13c.101 0 .14-.044.14-.159V4.66c0-.108-.039-.146-.14-.146h-1.13c-.102 0-.133.038-.133.146v1.098c0 .115.031.159.133.159Zm6.455 0h1.137c.095 0 .14-.044.14-.159V4.66c0-.108-.045-.146-.14-.146h-1.137c-.101 0-.133.038-.133.146v1.098c0 .115.032.159.133.159ZM3.45 14.358h2.678c.927 0 1.378-.45 1.378-1.402V10.32c0-.952-.45-1.403-1.378-1.403H3.45c-.927 0-1.384.451-1.384 1.403v2.635c0 .952.457 1.402 1.384 1.402Zm5.49-3.738h1.13c.102 0 .14-.045.14-.16V9.364c0-.108-.038-.146-.14-.146H8.94c-.101 0-.133.038-.133.146v1.098c0 .114.032.159.133.159Zm3.396 0h1.137c.101 0 .14-.045.14-.16V9.364c0-.108-.039-.146-.14-.146h-1.137c-.095 0-.127.038-.127.146v1.098c0 .114.032.159.127.159Zm-8.918 2.73c-.229 0-.336-.115-.336-.356v-2.71c0-.242.107-.356.336-.356h2.73c.234 0 .349.114.349.355v2.71c0 .242-.115.356-.35.356H3.417Zm7.236-1.03h1.137c.095 0 .14-.044.14-.158v-1.098c0-.108-.045-.152-.14-.152h-1.137c-.095 0-.127.044-.127.152v1.098c0 .114.032.159.127.159Zm-6.436.02h1.13c.101 0 .14-.038.14-.152v-1.105c0-.108-.039-.146-.14-.146h-1.13c-.102 0-.133.038-.133.146v1.104c0 .115.031.153.133.153Zm4.722 1.676h1.13c.102 0 .14-.039.14-.153V12.76c0-.102-.038-.146-.14-.146H8.94c-.101 0-.133.044-.133.146v1.104c0 .114.032.153.133.153Zm3.396 0h1.137c.101 0 .14-.039.14-.153V12.76c0-.102-.039-.146-.14-.146h-1.137c-.095 0-.127.044-.127.146v1.104c0 .114.032.153.127.153Z" />,
  );
