import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgDownloadIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c.454 0 .823.368.823.823v4.715h-1.646V.823c0-.455.368-.823.823-.823Zm.823 5.538v7.89l2.711-2.71a.823.823 0 0 1 1.164 1.163l-4.116 4.116a.824.824 0 0 1-1.164 0L7.303 11.88a.823.823 0 0 1 1.163-1.164l2.71 2.71.001-7.89h-5.35a2.884 2.884 0 0 0-2.882 2.881V19.12A2.884 2.884 0 0 0 5.826 22h12.347a2.885 2.885 0 0 0 2.881-2.881v-10.7a2.884 2.884 0 0 0-2.88-2.882h-5.35Z"
    />
  </Svg>
);

export const DownloadIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c.454 0 .823.368.823.823v4.715h-1.646V.823c0-.455.368-.823.823-.823Zm.823 5.538v7.89l2.711-2.71a.823.823 0 0 1 1.164 1.163l-4.116 4.116a.824.824 0 0 1-1.164 0L7.303 11.88a.823.823 0 0 1 1.163-1.164l2.71 2.71.001-7.89h-5.35a2.884 2.884 0 0 0-2.882 2.881V19.12A2.884 2.884 0 0 0 5.826 22h12.347a2.885 2.885 0 0 0 2.881-2.881v-10.7a2.884 2.884 0 0 0-2.88-2.882h-5.35Z"
    />,
  );
