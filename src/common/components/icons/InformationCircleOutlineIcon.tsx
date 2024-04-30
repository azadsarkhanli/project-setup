import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgInformationCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 18c-4.55 0-8.25-3.7-8.25-8.25S7.44 3.75 12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25Z" />
    <Path d="M10.662 9.912a.75.75 0 0 0 0 1.5h.75v4.124h-1.313a.75.75 0 0 0 0 1.5h4.125a.75.75 0 0 0 0-1.5H12.91v-4.874a.75.75 0 0 0-.75-.75h-1.5ZM10.756 7.662a1.219 1.219 0 1 1 2.437 0 1.219 1.219 0 0 1-2.437 0Z" />
  </Svg>
);

export const InformationCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 18c-4.55 0-8.25-3.7-8.25-8.25S7.44 3.75 12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25Z" />,
    <Path d="M10.662 9.912a.75.75 0 0 0 0 1.5h.75v4.124h-1.313a.75.75 0 0 0 0 1.5h4.125a.75.75 0 0 0 0-1.5H12.91v-4.874a.75.75 0 0 0-.75-.75h-1.5ZM10.756 7.662a1.219 1.219 0 1 1 2.437 0 1.219 1.219 0 0 1-2.437 0Z" />,
  );
