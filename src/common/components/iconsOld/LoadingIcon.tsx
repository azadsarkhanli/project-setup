import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgLoadingIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0Zm1.828 2.757 1.415-1.414a1 1 0 0 1 1.414 1.414L12.243 5.17a1 1 0 0 1-1.415-1.414ZM15 7h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm-2.757 3.829 1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415ZM9 15v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Zm-6.656-2.758 1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414ZM3 7H1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm.758-4.656 1.414 1.414a1 1 0 0 1-1.414 1.414L2.343 3.758a1 1 0 0 1 1.415-1.414Z"
    />
  </Svg>
);

export const LoadingIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0Zm1.828 2.757 1.415-1.414a1 1 0 0 1 1.414 1.414L12.243 5.17a1 1 0 0 1-1.415-1.414ZM15 7h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm-2.757 3.829 1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415ZM9 15v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Zm-6.656-2.758 1.414-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414ZM3 7H1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm.758-4.656 1.414 1.414a1 1 0 0 1-1.414 1.414L2.343 3.758a1 1 0 0 1 1.415-1.414Z"
    />,
  );
