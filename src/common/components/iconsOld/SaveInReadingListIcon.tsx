import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSaveInReadingListIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M4.888 8.398c1.777 0 3.269-1.485 3.269-3.27a3.285 3.285 0 0 0-3.27-3.268c-1.79 0-3.262 1.479-3.262 3.269a3.28 3.28 0 0 0 3.263 3.269Zm4.773-4.43h4.482a.56.56 0 0 0 .564-.56.56.56 0 0 0-.564-.558H9.66a.555.555 0 0 0-.558.559c0 .31.247.558.558.558Zm-4.773 3.23c-.26 0-.432-.171-.432-.431V5.56h-1.2c-.26 0-.431-.172-.438-.432 0-.26.178-.432.438-.432h1.2v-1.2c0-.26.171-.431.432-.437.266 0 .431.177.431.438v1.2h1.206c.26 0 .432.17.432.43 0 .261-.171.433-.432.433H5.32v1.206c0 .26-.165.431-.431.431Zm4.773.095h4.482a.56.56 0 0 0 .564-.558.56.56 0 0 0-.564-.559H9.66a.555.555 0 0 0-.558.559c0 .31.247.558.558.558ZM2.177 10.62h11.966a.56.56 0 0 0 .564-.559.56.56 0 0 0-.564-.559H2.177a.555.555 0 0 0-.558.559c0 .311.247.559.558.559Zm0 3.32h11.966a.556.556 0 1 0 0-1.111H2.177a.551.551 0 0 0-.558.558.55.55 0 0 0 .558.553Z" />
  </Svg>
);

export const SaveInReadingListIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M4.888 8.398c1.777 0 3.269-1.485 3.269-3.27a3.285 3.285 0 0 0-3.27-3.268c-1.79 0-3.262 1.479-3.262 3.269a3.28 3.28 0 0 0 3.263 3.269Zm4.773-4.43h4.482a.56.56 0 0 0 .564-.56.56.56 0 0 0-.564-.558H9.66a.555.555 0 0 0-.558.559c0 .31.247.558.558.558Zm-4.773 3.23c-.26 0-.432-.171-.432-.431V5.56h-1.2c-.26 0-.431-.172-.438-.432 0-.26.178-.432.438-.432h1.2v-1.2c0-.26.171-.431.432-.437.266 0 .431.177.431.438v1.2h1.206c.26 0 .432.17.432.43 0 .261-.171.433-.432.433H5.32v1.206c0 .26-.165.431-.431.431Zm4.773.095h4.482a.56.56 0 0 0 .564-.558.56.56 0 0 0-.564-.559H9.66a.555.555 0 0 0-.558.559c0 .31.247.558.558.558ZM2.177 10.62h11.966a.56.56 0 0 0 .564-.559.56.56 0 0 0-.564-.559H2.177a.555.555 0 0 0-.558.559c0 .311.247.559.558.559Zm0 3.32h11.966a.556.556 0 1 0 0-1.111H2.177a.551.551 0 0 0-.558.558.55.55 0 0 0 .558.553Z" />,
  );