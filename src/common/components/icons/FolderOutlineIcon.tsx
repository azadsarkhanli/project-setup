import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgFolderOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.75 5.624A2.624 2.624 0 0 1 3.375 3h3.557c.517 0 1.024.152 1.456.44l1.305.87c.184.123.4.19.624.19h10.306a2.624 2.624 0 0 1 2.625 2.624v11.249a2.625 2.625 0 0 1-2.625 2.625H3.375A2.624 2.624 0 0 1 .75 18.373V5.624Zm1.5 0c0-.621.503-1.125 1.125-1.125h3.557c.222 0 .439.066.624.19l1.305.87c.431.287.938.44 1.455.44h10.307c.621 0 1.125.504 1.125 1.125V8.25H2.25V5.624ZM21.748 9.75v8.624c0 .621-.504 1.125-1.125 1.125H3.375a1.125 1.125 0 0 1-1.125-1.125V9.749h19.498Z"
    />
  </Svg>
);

export const FolderOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.75 5.624A2.624 2.624 0 0 1 3.375 3h3.557c.517 0 1.024.152 1.456.44l1.305.87c.184.123.4.19.624.19h10.306a2.624 2.624 0 0 1 2.625 2.624v11.249a2.625 2.625 0 0 1-2.625 2.625H3.375A2.624 2.624 0 0 1 .75 18.373V5.624Zm1.5 0c0-.621.503-1.125 1.125-1.125h3.557c.222 0 .439.066.624.19l1.305.87c.431.287.938.44 1.455.44h10.307c.621 0 1.125.504 1.125 1.125V8.25H2.25V5.624ZM21.748 9.75v8.624c0 .621-.504 1.125-1.125 1.125H3.375a1.125 1.125 0 0 1-1.125-1.125V9.749h19.498Z"
    />,
  );
