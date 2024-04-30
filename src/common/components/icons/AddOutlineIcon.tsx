import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAddOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M12.749 5.25a.75.75 0 1 0-1.5 0v5.999h-6a.75.75 0 1 0 0 1.5h6v6a.75.75 0 0 0 1.5 0v-6h5.999a.75.75 0 1 0 0-1.5h-6v-6Z" />
  </Svg>
);

export const AddOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M12.749 5.25a.75.75 0 1 0-1.5 0v5.999h-6a.75.75 0 1 0 0 1.5h6v6a.75.75 0 0 0 1.5 0v-6h5.999a.75.75 0 1 0 0-1.5h-6v-6Z" />,
  );
