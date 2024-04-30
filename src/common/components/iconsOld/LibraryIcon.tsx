import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgLibraryIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 2a.75.75 0 0 1 .75.75v10.016a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 1.75 2Zm4.803 0a.75.75 0 0 1 .75.75v10.016a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75Zm4.207.854a.75.75 0 1 0-1.411.508l3.397 9.448a.75.75 0 1 0 1.412-.507L10.76 2.854Z"
    />
  </Svg>
);

export const LibraryIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.75 2a.75.75 0 0 1 .75.75v10.016a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 1.75 2Zm4.803 0a.75.75 0 0 1 .75.75v10.016a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75Zm4.207.854a.75.75 0 1 0-1.411.508l3.397 9.448a.75.75 0 1 0 1.412-.507L10.76 2.854Z"
    />,
  );
