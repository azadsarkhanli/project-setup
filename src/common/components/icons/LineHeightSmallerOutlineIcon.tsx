import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgLineHeightSmallerOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 12.75 5 12.414 5 12ZM5 16c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 16.75 5 16.414 5 16ZM5 8c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 8.75 5 8.414 5 8Z"
    />
  </Svg>
);

export const LineHeightSmallerOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 12c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 12.75 5 12.414 5 12ZM5 16c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 16.75 5 16.414 5 16ZM5 8c0-.414.369-.75.824-.75h12.353c.454 0 .823.336.823.75s-.369.75-.823.75H5.824C5.369 8.75 5 8.414 5 8Z"
    />,
  );
