import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgAlertFillIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M3.017 13.504h9.96c.983 0 1.612-.723 1.612-1.612 0-.266-.07-.54-.21-.793L9.39 2.187A1.567 1.567 0 0 0 8 1.36a1.59 1.59 0 0 0-1.396.826L1.62 11.105c-.14.254-.216.52-.216.787 0 .889.635 1.612 1.612 1.612Zm4.99-4.348c-.375 0-.585-.21-.597-.584l-.09-3.199c-.012-.387.267-.66.68-.66.4 0 .692.273.68.66l-.096 3.193c-.013.387-.222.59-.578.59Zm0 2.184c-.426 0-.781-.305-.781-.724 0-.412.349-.723.78-.723.426 0 .775.304.775.723 0 .42-.356.724-.775.724Z" />
  </Svg>
);

export const AlertFillIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M3.017 13.504h9.96c.983 0 1.612-.723 1.612-1.612 0-.266-.07-.54-.21-.793L9.39 2.187A1.567 1.567 0 0 0 8 1.36a1.59 1.59 0 0 0-1.396.826L1.62 11.105c-.14.254-.216.52-.216.787 0 .889.635 1.612 1.612 1.612Zm4.99-4.348c-.375 0-.585-.21-.597-.584l-.09-3.199c-.012-.387.267-.66.68-.66.4 0 .692.273.68.66l-.096 3.193c-.013.387-.222.59-.578.59Zm0 2.184c-.426 0-.781-.305-.781-.724 0-.412.349-.723.78-.723.426 0 .775.304.775.723 0 .42-.356.724-.775.724Z" />,
  );