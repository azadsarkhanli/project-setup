import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlaySkipBackOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.75a.75.75 0 1 0-1.5 0v16.498a.75.75 0 1 0 1.5 0v-6.395l10.91 6.53a1.652 1.652 0 0 0 1.767-.034c.496-.323.82-.895.82-1.554V5.202a1.84 1.84 0 0 0-.82-1.554 1.65 1.65 0 0 0-1.767-.034L6 10.144V3.75Zm0 8.249c0 .089.039.13.06.143l11.62 6.954c.04.024.07.028.09.027a.176.176 0 0 0 .088-.03c.067-.044.14-.14.14-.298V5.202c0-.157-.073-.254-.14-.297a.175.175 0 0 0-.088-.03.16.16 0 0 0-.09.026L6.06 11.855C6.04 11.868 6 11.91 6 12Z"
    />
  </Svg>
);

export const PlaySkipBackOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3.75a.75.75 0 1 0-1.5 0v16.498a.75.75 0 1 0 1.5 0v-6.395l10.91 6.53a1.652 1.652 0 0 0 1.767-.034c.496-.323.82-.895.82-1.554V5.202a1.84 1.84 0 0 0-.82-1.554 1.65 1.65 0 0 0-1.767-.034L6 10.144V3.75Zm0 8.249c0 .089.039.13.06.143l11.62 6.954c.04.024.07.028.09.027a.176.176 0 0 0 .088-.03c.067-.044.14-.14.14-.298V5.202c0-.157-.073-.254-.14-.297a.175.175 0 0 0-.088-.03.16.16 0 0 0-.09.026L6.06 11.855C6.04 11.868 6 11.91 6 12Z"
    />,
  );
