import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDownloadYesIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8 14.974c-3.586 0-6.557-2.964-6.557-6.557 0-3.586 2.97-6.557 6.563-6.557 3.587 0 6.551 2.97 6.551 6.557 0 3.593-2.97 6.557-6.557 6.557Zm-.006-9.94c-.343 0-.59.24-.59.577V8.71l.063 1.365-.603-.75-.73-.761a.519.519 0 0 0-.4-.171.528.528 0 0 0-.546.533c0 .159.05.285.159.4l2.177 2.202c.146.153.286.223.47.223.177 0 .317-.064.463-.223l2.184-2.202a.545.545 0 0 0 .152-.4.522.522 0 0 0-.54-.533.531.531 0 0 0-.4.171l-.736.768-.596.736.063-1.358V5.611c0-.336-.248-.577-.59-.577Z" />
  </Svg>
);

export const DownloadYesIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8 14.974c-3.586 0-6.557-2.964-6.557-6.557 0-3.586 2.97-6.557 6.563-6.557 3.587 0 6.551 2.97 6.551 6.557 0 3.593-2.97 6.557-6.557 6.557Zm-.006-9.94c-.343 0-.59.24-.59.577V8.71l.063 1.365-.603-.75-.73-.761a.519.519 0 0 0-.4-.171.528.528 0 0 0-.546.533c0 .159.05.285.159.4l2.177 2.202c.146.153.286.223.47.223.177 0 .317-.064.463-.223l2.184-2.202a.545.545 0 0 0 .152-.4.522.522 0 0 0-.54-.533.531.531 0 0 0-.4.171l-.736.768-.596.736.063-1.358V5.611c0-.336-.248-.577-.59-.577Z" />,
  );
