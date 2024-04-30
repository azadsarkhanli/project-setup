import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgEyeOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 7.5a4.5 4.5 0 1 0 0 8.998 4.5 4.5 0 0 0 0-8.999Zm-2.12 2.378a3 3 0 1 1 4.242 4.242 3 3 0 0 1-4.243-4.242Z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.983 4.5c-3.962 0-7.916 2.292-10.966 6.663l-.001.003a1.498 1.498 0 0 0-.027 1.665c2.356 3.688 6.261 6.667 10.994 6.667 4.682 0 8.664-2.986 11.027-6.685a1.507 1.507 0 0 0-.001-1.628l-.002-.003C20.643 7.531 16.636 4.5 11.984 4.5Zm-9.731 7.522-.002-.004C5.1 7.935 8.639 6 11.983 6c3.984 0 7.577 2.62 9.764 5.997.002.002.002.005 0 .008l-.001.001c-2.18 3.413-5.743 5.993-9.763 5.993-4.066 0-7.555-2.57-9.731-5.976Z"
    />
  </Svg>
);

export const EyeOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 7.5a4.5 4.5 0 1 0 0 8.998 4.5 4.5 0 0 0 0-8.999Zm-2.12 2.378a3 3 0 1 1 4.242 4.242 3 3 0 0 1-4.243-4.242Z"
    />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.983 4.5c-3.962 0-7.916 2.292-10.966 6.663l-.001.003a1.498 1.498 0 0 0-.027 1.665c2.356 3.688 6.261 6.667 10.994 6.667 4.682 0 8.664-2.986 11.027-6.685a1.507 1.507 0 0 0-.001-1.628l-.002-.003C20.643 7.531 16.636 4.5 11.984 4.5Zm-9.731 7.522-.002-.004C5.1 7.935 8.639 6 11.983 6c3.984 0 7.577 2.62 9.764 5.997.002.002.002.005 0 .008l-.001.001c-2.18 3.413-5.743 5.993-9.763 5.993-4.066 0-7.555-2.57-9.731-5.976Z"
    />,
  );
