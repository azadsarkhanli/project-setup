import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgClockIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M7.962 14.618c3.586 0 6.557-2.965 6.557-6.557 0-3.587-2.971-6.557-6.564-6.557-3.586 0-6.55 2.97-6.55 6.557 0 3.592 2.97 6.557 6.557 6.557Zm0-1.289a5.25 5.25 0 0 1-5.263-5.268 5.24 5.24 0 0 1 5.256-5.262A5.26 5.26 0 0 1 13.23 8.06a5.256 5.256 0 0 1-5.268 5.268ZM4.75 8.848h3.205a.5.5 0 0 0 .508-.502V4.182a.5.5 0 0 0-.508-.501.498.498 0 0 0-.501.501v3.663H4.75a.49.49 0 0 0-.502.501c0 .28.216.502.502.502Z" />
  </Svg>
);

export const ClockIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M7.962 14.618c3.586 0 6.557-2.965 6.557-6.557 0-3.587-2.971-6.557-6.564-6.557-3.586 0-6.55 2.97-6.55 6.557 0 3.592 2.97 6.557 6.557 6.557Zm0-1.289a5.25 5.25 0 0 1-5.263-5.268 5.24 5.24 0 0 1 5.256-5.262A5.26 5.26 0 0 1 13.23 8.06a5.256 5.256 0 0 1-5.268 5.268ZM4.75 8.848h3.205a.5.5 0 0 0 .508-.502V4.182a.5.5 0 0 0-.508-.501.498.498 0 0 0-.501.501v3.663H4.75a.49.49 0 0 0-.502.501c0 .28.216.502.502.502Z" />,
  );
