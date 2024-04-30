import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChapterIndicatorNoIcon = () => (
  <Svg fill="none" viewBox="0 0 12 12">
    <Circle cx={6.001} cy={6} r={4} fill="#FFF6EE" />
  </Svg>
);

export const ChapterIndicatorNoIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 12 12',
      ...props,
    },
    <Circle cx={6.001} cy={6} r={4} fill="#FFF6EE" />,
  );
