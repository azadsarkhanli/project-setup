import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPencilIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.184 2.778a1.805 1.805 0 0 0-2.58.027l-.525.525a1.031 1.031 0 0 0 0 1.459l1.129 1.13a1.031 1.031 0 0 0 1.458 0l.553-.553a1.805 1.805 0 0 0 0-2.552l-.035-.036ZM17.537 5.33a1.03 1.03 0 0 0-1.459 0L3.324 18.118c-.096.096-.172.21-.223.334l-.773 1.872a1.031 1.031 0 0 0 1.346 1.346l1.871-.773a1.03 1.03 0 0 0 .335-.223L18.666 7.92a1.031 1.031 0 0 0 .001-1.46l-1.13-1.129Z"
    />
  </Svg>
);

export const PencilIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.184 2.778a1.805 1.805 0 0 0-2.58.027l-.525.525a1.031 1.031 0 0 0 0 1.459l1.129 1.13a1.031 1.031 0 0 0 1.458 0l.553-.553a1.805 1.805 0 0 0 0-2.552l-.035-.036ZM17.537 5.33a1.03 1.03 0 0 0-1.459 0L3.324 18.118c-.096.096-.172.21-.223.334l-.773 1.872a1.031 1.031 0 0 0 1.346 1.346l1.871-.773a1.03 1.03 0 0 0 .335-.223L18.666 7.92a1.031 1.031 0 0 0 .001-1.46l-1.13-1.129Z"
    />,
  );
