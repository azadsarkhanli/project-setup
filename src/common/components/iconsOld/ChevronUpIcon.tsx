import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgChevronUpIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8.417 3.706c-.216 0-.4.082-.565.247L3.01 8.905a.699.699 0 0 0-.21.514c0 .412.318.742.73.742a.766.766 0 0 0 .534-.222L8.416 5.47l4.354 4.47c.14.133.324.221.527.221a.73.73 0 0 0 .737-.742.7.7 0 0 0-.21-.514L8.982 3.953a.748.748 0 0 0-.565-.247Z" />
  </Svg>
);

export const ChevronUpIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8.417 3.706c-.216 0-.4.082-.565.247L3.01 8.905a.699.699 0 0 0-.21.514c0 .412.318.742.73.742a.766.766 0 0 0 .534-.222L8.416 5.47l4.354 4.47c.14.133.324.221.527.221a.73.73 0 0 0 .737-.742.7.7 0 0 0-.21-.514L8.982 3.953a.748.748 0 0 0-.565-.247Z" />,
  );
