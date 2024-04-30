import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgInformationCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 2.625c-5.17 0-9.374 4.205-9.374 9.374 0 5.168 4.205 9.374 9.374 9.374 5.169 0 9.374-4.206 9.374-9.374 0-5.17-4.205-9.374-9.374-9.374Zm0 3.843a1.219 1.219 0 1 1 0 2.438 1.219 1.219 0 0 1 0-2.438Zm2.25 10.593h-4.125a.75.75 0 0 1 0-1.5h1.312v-4.125h-.75a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75v4.875h1.313a.75.75 0 0 1 0 1.5Z" />
  </Svg>
);

export const InformationCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 2.625c-5.17 0-9.374 4.205-9.374 9.374 0 5.168 4.205 9.374 9.374 9.374 5.169 0 9.374-4.206 9.374-9.374 0-5.17-4.205-9.374-9.374-9.374Zm0 3.843a1.219 1.219 0 1 1 0 2.438 1.219 1.219 0 0 1 0-2.438Zm2.25 10.593h-4.125a.75.75 0 0 1 0-1.5h1.312v-4.125h-.75a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75v4.875h1.313a.75.75 0 0 1 0 1.5Z" />,
  );
