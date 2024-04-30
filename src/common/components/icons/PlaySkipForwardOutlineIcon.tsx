import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPlaySkipForwardOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.498 3.75a.75.75 0 1 0-1.5 0v6.394l-10.91-6.53a1.652 1.652 0 0 0-1.767.034A1.84 1.84 0 0 0 4.5 5.202v13.593c0 .66.325 1.231.82 1.554a1.65 1.65 0 0 0 1.767.035l10.911-6.53v6.394a.75.75 0 1 0 1.5 0V3.75ZM5.999 5.202c0-.157.073-.254.14-.297a.175.175 0 0 1 .088-.03c.021-.001.05.002.09.026l11.62 6.954c.021.013.06.054.06.144 0 .089-.039.13-.06.143l-11.62 6.954a.16.16 0 0 1-.09.027.176.176 0 0 1-.088-.03c-.067-.044-.14-.14-.14-.298V5.202Z"
    />
  </Svg>
);

export const PlaySkipForwardOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.498 3.75a.75.75 0 1 0-1.5 0v6.394l-10.91-6.53a1.652 1.652 0 0 0-1.767.034A1.84 1.84 0 0 0 4.5 5.202v13.593c0 .66.325 1.231.82 1.554a1.65 1.65 0 0 0 1.767.035l10.911-6.53v6.394a.75.75 0 1 0 1.5 0V3.75ZM5.999 5.202c0-.157.073-.254.14-.297a.175.175 0 0 1 .088-.03c.021-.001.05.002.09.026l11.62 6.954c.021.013.06.054.06.144 0 .089-.039.13-.06.143l-11.62 6.954a.16.16 0 0 1-.09.027.176.176 0 0 1-.088-.03c-.067-.044-.14-.14-.14-.298V5.202Z"
    />,
  );
