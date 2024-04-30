import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAlertCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 18c-4.55 0-8.25-3.7-8.25-8.25S7.44 3.75 12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25Z" />
    <Path d="M12 15.37a.939.939 0 1 0 0 1.88.939.939 0 1 0 0-1.88ZM11.99 6.75c-.27 0-.53.11-.72.31-.19.2-.29.45-.29.72v.06l.27 5.7c.02.4.35.71.75.71s.73-.31.75-.71l.27-5.72a.993.993 0 0 0-.27-.73c-.18-.2-.43-.32-.76-.33v-.01Z" />
  </Svg>
);

export const AlertCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 18c-4.55 0-8.25-3.7-8.25-8.25S7.44 3.75 12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25Z" />,
    <Path d="M12 15.37a.939.939 0 1 0 0 1.88.939.939 0 1 0 0-1.88ZM11.99 6.75c-.27 0-.53.11-.72.31-.19.2-.29.45-.29.72v.06l.27 5.7c.02.4.35.71.75.71s.73-.31.75-.71l.27-5.72a.993.993 0 0 0-.27-.73c-.18-.2-.43-.32-.76-.33v-.01Z" />,
  );
