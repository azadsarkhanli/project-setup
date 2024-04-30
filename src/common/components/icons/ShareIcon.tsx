import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgShareIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M17.623 8.25h-4.874v6.795a.75.75 0 0 1-1.5 0V8.25H6.374a2.627 2.627 0 0 0-2.624 2.625v8.999a2.628 2.628 0 0 0 2.624 2.625h11.249a2.628 2.628 0 0 0 2.625-2.625v-9a2.628 2.628 0 0 0-2.625-2.624ZM12.749 4.06l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 0 0 1.06 1.06l2.47-2.47v4.19h1.5V4.06Z" />
  </Svg>
);

export const ShareIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M17.623 8.25h-4.874v6.795a.75.75 0 0 1-1.5 0V8.25H6.374a2.627 2.627 0 0 0-2.624 2.625v8.999a2.628 2.628 0 0 0 2.624 2.625h11.249a2.628 2.628 0 0 0 2.625-2.625v-9a2.628 2.628 0 0 0-2.625-2.624ZM12.749 4.06l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 0 0 1.06 1.06l2.47-2.47v4.19h1.5V4.06Z" />,
  );
