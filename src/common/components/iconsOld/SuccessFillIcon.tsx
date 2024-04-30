import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSuccessFillIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8 14.974c3.586 0 6.557-2.964 6.557-6.557 0-3.586-2.97-6.557-6.563-6.557-3.587 0-6.551 2.97-6.551 6.557 0 3.593 2.97 6.557 6.557 6.557Zm-.705-3.421c-.24 0-.438-.108-.615-.337L5.125 9.325a.703.703 0 0 1-.172-.451c0-.324.254-.59.584-.59.197 0 .35.076.508.279l1.225 1.555 2.628-4.202c.133-.222.311-.33.514-.33.317 0 .603.222.603.552 0 .146-.076.305-.165.445l-2.97 4.633c-.147.216-.35.337-.585.337Z" />
  </Svg>
);

export const SuccessFillIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8 14.974c3.586 0 6.557-2.964 6.557-6.557 0-3.586-2.97-6.557-6.563-6.557-3.587 0-6.551 2.97-6.551 6.557 0 3.593 2.97 6.557 6.557 6.557Zm-.705-3.421c-.24 0-.438-.108-.615-.337L5.125 9.325a.703.703 0 0 1-.172-.451c0-.324.254-.59.584-.59.197 0 .35.076.508.279l1.225 1.555 2.628-4.202c.133-.222.311-.33.514-.33.317 0 .603.222.603.552 0 .146-.076.305-.165.445l-2.97 4.633c-.147.216-.35.337-.585.337Z" />,
  );
