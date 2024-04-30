import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgCloudUploadOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M5.452 6.577C6.356 4.348 8.62 2.24 11.998 2.24c3.635 0 6.732 2.473 7.412 6.475.959.144 1.963.511 2.79 1.125 1.027.764 1.796 1.927 1.796 3.48 0 1.506-.634 2.704-1.666 3.507-1.012.787-2.358 1.161-3.77 1.161h-3.563a.75.75 0 1 1 0-1.5h3.563c1.165 0 2.162-.31 2.85-.845.666-.519 1.087-1.28 1.087-2.323 0-.996-.473-1.742-1.192-2.276-.736-.547-1.713-.85-2.595-.893a.75.75 0 0 1-.709-.671C17.624 5.865 15.026 3.74 12 3.74c-2.859 0-4.687 1.886-5.286 3.753a.75.75 0 0 1-.643.518c-2.584.245-4.57 1.836-4.57 4.24 0 2.417 2.088 4.237 4.874 4.237H9a.75.75 0 1 1 0 1.5H6.374c-3.4 0-6.374-2.293-6.374-5.737C0 8.976 2.593 7.02 5.452 6.577Z" />
    <Path d="m12.529 8.459 3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v10.209a.75.75 0 1 1-1.5 0V10.8l-1.72 1.72a.75.75 0 1 1-1.06-1.061l3-3a.75.75 0 0 1 1.06 0Z" />
  </Svg>
);

export const CloudUploadOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M5.452 6.577C6.356 4.348 8.62 2.24 11.998 2.24c3.635 0 6.732 2.473 7.412 6.475.959.144 1.963.511 2.79 1.125 1.027.764 1.796 1.927 1.796 3.48 0 1.506-.634 2.704-1.666 3.507-1.012.787-2.358 1.161-3.77 1.161h-3.563a.75.75 0 1 1 0-1.5h3.563c1.165 0 2.162-.31 2.85-.845.666-.519 1.087-1.28 1.087-2.323 0-.996-.473-1.742-1.192-2.276-.736-.547-1.713-.85-2.595-.893a.75.75 0 0 1-.709-.671C17.624 5.865 15.026 3.74 12 3.74c-2.859 0-4.687 1.886-5.286 3.753a.75.75 0 0 1-.643.518c-2.584.245-4.57 1.836-4.57 4.24 0 2.417 2.088 4.237 4.874 4.237H9a.75.75 0 1 1 0 1.5H6.374c-3.4 0-6.374-2.293-6.374-5.737C0 8.976 2.593 7.02 5.452 6.577Z" />,
    <Path d="m12.529 8.459 3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v10.209a.75.75 0 1 1-1.5 0V10.8l-1.72 1.72a.75.75 0 1 1-1.06-1.061l3-3a.75.75 0 0 1 1.06 0Z" />,
  );
