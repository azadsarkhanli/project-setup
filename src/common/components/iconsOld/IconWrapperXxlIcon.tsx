import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgIconWrapperXxlIcon = () => (
  <Svg fill="none" viewBox="0 0 32 32">
    <Path d="M2.844 16.092c0 3.847 1.117 8.1 2.996 11.388.355.622 1.028.812 1.663.495.622.914 1.688 1.282 2.894.926 1.524-.47 2.21-1.79 1.752-3.3l-1.828-6.03c-.457-1.499-1.752-2.184-3.288-1.74-.647.19-1.143.546-1.46 1.016a20.413 20.413 0 0 1-.203-2.755c0-6.945 4.24-11.566 10.6-11.566 6.36 0 10.614 4.621 10.614 11.566 0 .901-.064 1.828-.203 2.755-.318-.457-.813-.813-1.473-1.016-1.523-.444-2.818.241-3.275 1.74l-1.828 6.03c-.47 1.523.228 2.83 1.739 3.3 1.218.356 2.285-.012 2.894-.914.648.305 1.32.115 1.676-.507 1.879-3.289 3.009-7.541 3.009-11.388C29.123 7.624 23.88 2 15.97 2 8.075 2 2.845 7.624 2.845 16.092Z" />
  </Svg>
);

export const IconWrapperXxlIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 32 32',
      ...props,
    },
    <Path d="M2.844 16.092c0 3.847 1.117 8.1 2.996 11.388.355.622 1.028.812 1.663.495.622.914 1.688 1.282 2.894.926 1.524-.47 2.21-1.79 1.752-3.3l-1.828-6.03c-.457-1.499-1.752-2.184-3.288-1.74-.647.19-1.143.546-1.46 1.016a20.413 20.413 0 0 1-.203-2.755c0-6.945 4.24-11.566 10.6-11.566 6.36 0 10.614 4.621 10.614 11.566 0 .901-.064 1.828-.203 2.755-.318-.457-.813-.813-1.473-1.016-1.523-.444-2.818.241-3.275 1.74l-1.828 6.03c-.47 1.523.228 2.83 1.739 3.3 1.218.356 2.285-.012 2.894-.914.648.305 1.32.115 1.676-.507 1.879-3.289 3.009-7.541 3.009-11.388C29.123 7.624 23.88 2 15.97 2 8.075 2 2.845 7.624 2.845 16.092Z" />,
  );