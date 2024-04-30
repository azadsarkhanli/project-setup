import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgHelpCircleIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M11.999 3c-4.968 0-9 4.03-9 8.999 0 4.968 4.032 8.999 9 8.999s8.999-4.031 8.999-9c0-4.967-4.031-8.998-9-8.998Zm-.281 14.248a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.567-4.78c-.76.51-.864.977-.864 1.405a.656.656 0 0 1-1.313 0c0-1.026.473-1.843 1.445-2.496.903-.606 1.414-.99 1.414-1.836 0-.574-.328-1.01-1.007-1.334-.16-.076-.516-.15-.953-.144-.55.007-.976.138-1.305.402-.62.499-.672 1.042-.672 1.05a.657.657 0 0 1-1.313-.064c.006-.114.085-1.14 1.161-2.006.559-.45 1.269-.683 2.11-.693.595-.007 1.154.094 1.533.273 1.135.537 1.758 1.431 1.758 2.516 0 1.585-1.06 2.297-1.995 2.926Z" />
  </Svg>
);

export const HelpCircleIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M11.999 3c-4.968 0-9 4.03-9 8.999 0 4.968 4.032 8.999 9 8.999s8.999-4.031 8.999-9c0-4.967-4.031-8.998-9-8.998Zm-.281 14.248a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.567-4.78c-.76.51-.864.977-.864 1.405a.656.656 0 0 1-1.313 0c0-1.026.473-1.843 1.445-2.496.903-.606 1.414-.99 1.414-1.836 0-.574-.328-1.01-1.007-1.334-.16-.076-.516-.15-.953-.144-.55.007-.976.138-1.305.402-.62.499-.672 1.042-.672 1.05a.657.657 0 0 1-1.313-.064c.006-.114.085-1.14 1.161-2.006.559-.45 1.269-.683 2.11-.693.595-.007 1.154.094 1.533.273 1.135.537 1.758 1.431 1.758 2.516 0 1.585-1.06 2.297-1.995 2.926Z" />,
  );