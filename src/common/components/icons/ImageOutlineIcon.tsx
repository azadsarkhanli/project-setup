import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgImageOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.748 6a2.25 2.25 0 1 0 0 4.499 2.25 2.25 0 0 0 0-4.5Zm-.53 1.72a.75.75 0 1 1 1.06 1.06.75.75 0 0 1-1.06-1.06Z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.477 20.998h9.021a3 3 0 0 0 3-3V5.999a3 3 0 0 0-3-3H4.5a3 3 0 0 0-3 3v11.999a3 3 0 0 0 3 3h5.977ZM3 5.999a1.5 1.5 0 0 1 1.5-1.5h14.998a1.5 1.5 0 0 1 1.5 1.5v9.648l-2.217-1.85a2.25 2.25 0 0 0-3.032.14l-1.12 1.121-4.1-4.09a2.25 2.25 0 0 0-3.084-.092L3 14.828V6Zm10.568 10.12-4.098-4.09a.75.75 0 0 0-1.028-.032L3 16.835v1.163a1.5 1.5 0 0 0 1.5 1.5h5.689l3.379-3.38Zm7.43 1.48v.399a1.5 1.5 0 0 1-1.5 1.5H12.31l4.5-4.5a.75.75 0 0 1 1.01-.048l3.178 2.65Z"
    />
  </Svg>
);

export const ImageOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.748 6a2.25 2.25 0 1 0 0 4.499 2.25 2.25 0 0 0 0-4.5Zm-.53 1.72a.75.75 0 1 1 1.06 1.06.75.75 0 0 1-1.06-1.06Z"
    />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.477 20.998h9.021a3 3 0 0 0 3-3V5.999a3 3 0 0 0-3-3H4.5a3 3 0 0 0-3 3v11.999a3 3 0 0 0 3 3h5.977ZM3 5.999a1.5 1.5 0 0 1 1.5-1.5h14.998a1.5 1.5 0 0 1 1.5 1.5v9.648l-2.217-1.85a2.25 2.25 0 0 0-3.032.14l-1.12 1.121-4.1-4.09a2.25 2.25 0 0 0-3.084-.092L3 14.828V6Zm10.568 10.12-4.098-4.09a.75.75 0 0 0-1.028-.032L3 16.835v1.163a1.5 1.5 0 0 0 1.5 1.5h5.689l3.379-3.38Zm7.43 1.48v.399a1.5 1.5 0 0 1-1.5 1.5H12.31l4.5-4.5a.75.75 0 0 1 1.01-.048l3.178 2.65Z"
    />,
  );
