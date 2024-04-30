import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloseCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M8.469 8.469a.75.75 0 0 1 1.06 0L12 10.938l2.469-2.47a.75.75 0 1 1 1.06 1.061L13.06 12l2.47 2.469a.75.75 0 1 1-1.061 1.06l-2.47-2.469-2.469 2.47a.75.75 0 1 1-1.06-1.061l2.469-2.47-2.47-2.469a.75.75 0 0 1 0-1.06Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.998c0-5.382 4.366-9.748 9.748-9.748 5.383 0 9.75 4.366 9.75 9.748 0 5.383-4.367 9.75-9.75 9.75-5.382 0-9.748-4.367-9.748-9.75Zm9.748-8.249A8.251 8.251 0 0 0 3.75 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.249Z"
    />
  </Svg>
);

export const CloseCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M8.469 8.469a.75.75 0 0 1 1.06 0L12 10.938l2.469-2.47a.75.75 0 1 1 1.06 1.061L13.06 12l2.47 2.469a.75.75 0 1 1-1.061 1.06l-2.47-2.469-2.469 2.47a.75.75 0 1 1-1.06-1.061l2.469-2.47-2.47-2.469a.75.75 0 0 1 0-1.06Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.998c0-5.382 4.366-9.748 9.748-9.748 5.383 0 9.75 4.366 9.75 9.748 0 5.383-4.367 9.75-9.75 9.75-5.382 0-9.748-4.367-9.748-9.75Zm9.748-8.249A8.251 8.251 0 0 0 3.75 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.249Z"
    />,
  );
