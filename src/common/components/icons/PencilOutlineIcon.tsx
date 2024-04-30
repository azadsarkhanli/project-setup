import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPencilOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M21.308 2.689a1.5 1.5 0 0 0-2.121 0l-.007.007-1.053 1.053a.75.75 0 0 0 0 1.06l1.06 1.061a.75.75 0 0 0 1.06 0l1.061-1.06.007-.008a1.5 1.5 0 0 0 0-2.106l-.007-.007ZM17.597 5.34a.75.75 0 0 0-1.061 0L3.546 18.36a.751.751 0 0 0-.136.188l-1.078 2.11a.75.75 0 0 0 1.009 1.008l2.108-1.078a.75.75 0 0 0 .189-.137L18.656 7.461a.75.75 0 0 0 .001-1.06l-1.06-1.061Z" />
  </Svg>
);

export const PencilOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M21.308 2.689a1.5 1.5 0 0 0-2.121 0l-.007.007-1.053 1.053a.75.75 0 0 0 0 1.06l1.06 1.061a.75.75 0 0 0 1.06 0l1.061-1.06.007-.008a1.5 1.5 0 0 0 0-2.106l-.007-.007ZM17.597 5.34a.75.75 0 0 0-1.061 0L3.546 18.36a.751.751 0 0 0-.136.188l-1.078 2.11a.75.75 0 0 0 1.009 1.008l2.108-1.078a.75.75 0 0 0 .189-.137L18.656 7.461a.75.75 0 0 0 .001-1.06l-1.06-1.061Z" />,
  );
