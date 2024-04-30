import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCheckIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M6.598 14c.36 0 .637-.127.833-.374l6.366-8.429c.142-.19.203-.35.203-.506 0-.409-.339-.691-.82-.691-.338 0-.541.104-.744.374L6.57 12.29l-3.02-3.287a.866.866 0 0 0-.711-.317c-.488 0-.84.294-.84.697 0 .178.074.351.25.53l3.508 3.719c.237.253.495.368.84.368Z" />
  </Svg>
);

export const CheckIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M6.598 14c.36 0 .637-.127.833-.374l6.366-8.429c.142-.19.203-.35.203-.506 0-.409-.339-.691-.82-.691-.338 0-.541.104-.744.374L6.57 12.29l-3.02-3.287a.866.866 0 0 0-.711-.317c-.488 0-.84.294-.84.697 0 .178.074.351.25.53l3.508 3.719c.237.253.495.368.84.368Z" />,
  );
