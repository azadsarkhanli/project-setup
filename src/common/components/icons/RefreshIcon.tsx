import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRefreshIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.529 2.188a.75.75 0 1 0-1.06 1.06l2.33 2.331A27.453 27.453 0 0 0 12 5.53a8.25 8.25 0 1 0 8.25 8.25.75.75 0 0 0-1.501 0 6.75 6.75 0 1 1-6.75-6.75c.962 0 1.615.031 2.053.075l-2.583 2.582a.75.75 0 1 0 1.06 1.06l3.75-3.749a.75.75 0 0 0 0-1.06l-3.75-3.75Z"
    />
  </Svg>
);

export const RefreshIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.529 2.188a.75.75 0 1 0-1.06 1.06l2.33 2.331A27.453 27.453 0 0 0 12 5.53a8.25 8.25 0 1 0 8.25 8.25.75.75 0 0 0-1.501 0 6.75 6.75 0 1 1-6.75-6.75c.962 0 1.615.031 2.053.075l-2.583 2.582a.75.75 0 1 0 1.06 1.06l3.75-3.749a.75.75 0 0 0 0-1.06l-3.75-3.75Z"
    />,
  );
