import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgTrashOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M20.25 4.5h-4.5V3.09c0-.52-.29-.94-.63-1.2-.35-.25-.79-.39-1.25-.39h-3.79c-.43.01-.85.14-1.18.39-.34.26-.62.67-.62 1.19v1.41H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h.8l.89 14.3c.07 1.22.99 2.2 2.25 2.2h8.62c1.27 0 2.17-.99 2.25-2.2l.89-14.3h.8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v.01ZM9.75 3.12l.03-.03c.06-.05.18-.1.34-.1h3.76c.16 0 .28.05.34.1.02.02.03.02.03.03V4.5h-4.5V3.12Zm7.31 17.08c-.03.52-.37.8-.75.8H7.69c-.39 0-.72-.28-.75-.79L6.05 6h11.9l-.89 14.2Z" />
    <Path d="m7.87 8.28.38 10.5c.01.41.36.74.78.72.41-.01.74-.36.72-.78l-.37-10.5a.744.744 0 0 0-.78-.72c-.41.01-.74.36-.72.78h-.01ZM12 19.5c.41 0 .75-.34.75-.75V8.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10.5c0 .41.34.75.75.75ZM14.97 19.5c.41.01.76-.31.78-.72l.38-10.5a.763.763 0 0 0-.72-.78.756.756 0 0 0-.78.72l-.38 10.5c-.01.41.31.76.72.78Z" />
  </Svg>
);

export const TrashOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M20.25 4.5h-4.5V3.09c0-.52-.29-.94-.63-1.2-.35-.25-.79-.39-1.25-.39h-3.79c-.43.01-.85.14-1.18.39-.34.26-.62.67-.62 1.19v1.41H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h.8l.89 14.3c.07 1.22.99 2.2 2.25 2.2h8.62c1.27 0 2.17-.99 2.25-2.2l.89-14.3h.8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75v.01ZM9.75 3.12l.03-.03c.06-.05.18-.1.34-.1h3.76c.16 0 .28.05.34.1.02.02.03.02.03.03V4.5h-4.5V3.12Zm7.31 17.08c-.03.52-.37.8-.75.8H7.69c-.39 0-.72-.28-.75-.79L6.05 6h11.9l-.89 14.2Z" />,
    <Path d="m7.87 8.28.38 10.5c.01.41.36.74.78.72.41-.01.74-.36.72-.78l-.37-10.5a.744.744 0 0 0-.78-.72c-.41.01-.74.36-.72.78h-.01ZM12 19.5c.41 0 .75-.34.75-.75V8.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v10.5c0 .41.34.75.75.75ZM14.97 19.5c.41.01.76-.31.78-.72l.38-10.5a.763.763 0 0 0-.72-.78.756.756 0 0 0-.78.72l-.38 10.5c-.01.41.31.76.72.78Z" />,
  );
