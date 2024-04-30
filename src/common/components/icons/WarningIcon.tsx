import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgWarningIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M21.048 18.705 13.06 3.87c-.566-1.052-2.075-1.052-2.641 0L2.43 18.705a1.5 1.5 0 0 0 1.318 2.21h15.978a1.5 1.5 0 0 0 1.32-2.211Zm-9.308-.086a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.018-9.428-.27 5.718a.75.75 0 0 1-1.5 0l-.268-5.715a1.018 1.018 0 0 1 .972-1.063l.035-.001h.01a1.019 1.019 0 0 1 1.018 1.063l.002-.002Z" />
  </Svg>
);

export const WarningIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M21.048 18.705 13.06 3.87c-.566-1.052-2.075-1.052-2.641 0L2.43 18.705a1.5 1.5 0 0 0 1.318 2.21h15.978a1.5 1.5 0 0 0 1.32-2.211Zm-9.308-.086a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm1.018-9.428-.27 5.718a.75.75 0 0 1-1.5 0l-.268-5.715a1.018 1.018 0 0 1 .972-1.063l.035-.001h.01a1.019 1.019 0 0 1 1.018 1.063l.002-.002Z" />,
  );
