import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgRadioButtonOffIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.999c0-5.383 4.366-9.75 9.749-9.75 5.382 0 9.749 4.367 9.749 9.75 0 5.382-4.367 9.749-9.75 9.749-5.382 0-9.748-4.367-9.748-9.75Zm9.749-8.25A8.251 8.251 0 0 0 3.749 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.248Z"
    />
  </Svg>
);

export const RadioButtonOffIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 11.999c0-5.383 4.366-9.75 9.749-9.75 5.382 0 9.749 4.367 9.749 9.75 0 5.382-4.367 9.749-9.75 9.749-5.382 0-9.748-4.367-9.748-9.75Zm9.749-8.25A8.251 8.251 0 0 0 3.749 12 8.251 8.251 0 0 0 12 20.248a8.251 8.251 0 0 0 8.249-8.25 8.251 8.251 0 0 0-8.25-8.248Z"
    />,
  );
