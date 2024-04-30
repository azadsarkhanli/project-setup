import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAddRoundIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8 14.558c3.586 0 6.557-2.965 6.557-6.558 0-3.586-2.971-6.557-6.564-6.557-3.586 0-6.55 2.971-6.55 6.557 0 3.593 2.97 6.558 6.557 6.558ZM5.11 8.007c0-.368.26-.629.622-.629h1.644V5.734c0-.368.254-.628.616-.628.368 0 .629.26.629.628v1.644h1.65c.355 0 .622.26.622.629a.599.599 0 0 1-.622.616h-1.65v1.644c0 .361-.26.622-.629.622-.362 0-.616-.26-.616-.622V8.623H5.733c-.361 0-.622-.254-.622-.616Z" />
  </Svg>
);

export const AddRoundIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8 14.558c3.586 0 6.557-2.965 6.557-6.558 0-3.586-2.971-6.557-6.564-6.557-3.586 0-6.55 2.971-6.55 6.557 0 3.593 2.97 6.558 6.557 6.558ZM5.11 8.007c0-.368.26-.629.622-.629h1.644V5.734c0-.368.254-.628.616-.628.368 0 .629.26.629.628v1.644h1.65c.355 0 .622.26.622.629a.599.599 0 0 1-.622.616h-1.65v1.644c0 .361-.26.622-.629.622-.362 0-.616-.26-.616-.622V8.623H5.733c-.361 0-.622-.254-.622-.616Z" />,
  );
