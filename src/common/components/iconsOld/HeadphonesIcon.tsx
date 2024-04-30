import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgHeadphonesIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M1.422 8.046c0 1.923.558 4.05 1.498 5.694.178.31.514.406.831.247.311.457.845.641 1.448.464.761-.235 1.104-.895.876-1.65L5.16 9.784c-.229-.749-.876-1.092-1.644-.87a1.298 1.298 0 0 0-.73.508 10.205 10.205 0 0 1-.102-1.377c0-3.472 2.12-5.783 5.3-5.783 3.18 0 5.307 2.31 5.307 5.783 0 .45-.032.914-.102 1.377-.158-.228-.406-.406-.736-.507-.762-.223-1.41.12-1.638.87L9.902 12.8c-.235.762.115 1.416.87 1.65.61.178 1.143-.006 1.447-.456.324.152.66.057.838-.254.94-1.644 1.504-3.77 1.504-5.694C14.561 3.812 11.94 1 7.985 1 4.037 1 1.422 3.812 1.422 8.046Z" />
  </Svg>
);

export const HeadphonesIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M1.422 8.046c0 1.923.558 4.05 1.498 5.694.178.31.514.406.831.247.311.457.845.641 1.448.464.761-.235 1.104-.895.876-1.65L5.16 9.784c-.229-.749-.876-1.092-1.644-.87a1.298 1.298 0 0 0-.73.508 10.205 10.205 0 0 1-.102-1.377c0-3.472 2.12-5.783 5.3-5.783 3.18 0 5.307 2.31 5.307 5.783 0 .45-.032.914-.102 1.377-.158-.228-.406-.406-.736-.507-.762-.223-1.41.12-1.638.87L9.902 12.8c-.235.762.115 1.416.87 1.65.61.178 1.143-.006 1.447-.456.324.152.66.057.838-.254.94-1.644 1.504-3.77 1.504-5.694C14.561 3.812 11.94 1 7.985 1 4.037 1 1.422 3.812 1.422 8.046Z" />,
  );