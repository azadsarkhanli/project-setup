import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgFolderIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M20.623 4.5a2.625 2.625 0 0 1 2.625 2.624v.75a.375.375 0 0 1-.375.375H1.125a.375.375 0 0 1-.375-.375v-2.25A2.625 2.625 0 0 1 3.375 3h3.557a2.61 2.61 0 0 1 1.458.44l1.303.872c.184.123.402.188.624.187h10.306ZM3.375 20.998A2.625 2.625 0 0 1 .75 18.373v-8.25c0-.206.168-.374.375-.374h21.748c.206 0 .375.168.375.375v8.249a2.625 2.625 0 0 1-2.625 2.625H3.375Z" />
  </Svg>
);

export const FolderIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M20.623 4.5a2.625 2.625 0 0 1 2.625 2.624v.75a.375.375 0 0 1-.375.375H1.125a.375.375 0 0 1-.375-.375v-2.25A2.625 2.625 0 0 1 3.375 3h3.557a2.61 2.61 0 0 1 1.458.44l1.303.872c.184.123.402.188.624.187h10.306ZM3.375 20.998A2.625 2.625 0 0 1 .75 18.373v-8.25c0-.206.168-.374.375-.374h21.748c.206 0 .375.168.375.375v8.249a2.625 2.625 0 0 1-2.625 2.625H3.375Z" />,
  );
