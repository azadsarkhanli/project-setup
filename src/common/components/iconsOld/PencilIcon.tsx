import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPencilIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="m12.386 4.738.686-.679c.343-.343.355-.717.05-1.028l-.247-.248c-.311-.31-.692-.28-1.035.051l-.685.68 1.231 1.224Zm-7.744 7.725 7.135-7.128-1.219-1.225-7.135 7.135-.622 1.485c-.07.19.127.393.311.324l1.53-.59Z" />
  </Svg>
);

export const PencilIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="m12.386 4.738.686-.679c.343-.343.355-.717.05-1.028l-.247-.248c-.311-.31-.692-.28-1.035.051l-.685.68 1.231 1.224Zm-7.744 7.725 7.135-7.128-1.219-1.225-7.135 7.135-.622 1.485c-.07.19.127.393.311.324l1.53-.59Z" />,
  );
