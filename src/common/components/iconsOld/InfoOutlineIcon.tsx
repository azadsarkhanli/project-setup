import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgInfoOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path d="M8 14.974c3.586 0 6.557-2.964 6.557-6.557 0-3.586-2.97-6.557-6.563-6.557-3.587 0-6.551 2.97-6.551 6.557 0 3.593 2.97 6.557 6.557 6.557Zm0-1.289a5.25 5.25 0 0 1-5.262-5.268 5.24 5.24 0 0 1 5.256-5.262 5.26 5.26 0 0 1 5.275 5.262A5.256 5.256 0 0 1 8 13.685ZM7.962 6.26a.86.86 0 0 0 .863-.863.863.863 0 1 0-1.726 0c0 .476.387.863.863.863ZM6.876 11.87h2.578c.285 0 .507-.203.507-.489a.493.493 0 0 0-.507-.488h-.711V7.877c0-.38-.19-.628-.546-.628H6.99a.497.497 0 0 0-.508.489c0 .285.228.489.508.489h.647v2.666h-.762a.492.492 0 0 0-.501.488c0 .286.222.49.501.49Z" />
  </Svg>
);

export const InfoOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path d="M8 14.974c3.586 0 6.557-2.964 6.557-6.557 0-3.586-2.97-6.557-6.563-6.557-3.587 0-6.551 2.97-6.551 6.557 0 3.593 2.97 6.557 6.557 6.557Zm0-1.289a5.25 5.25 0 0 1-5.262-5.268 5.24 5.24 0 0 1 5.256-5.262 5.26 5.26 0 0 1 5.275 5.262A5.256 5.256 0 0 1 8 13.685ZM7.962 6.26a.86.86 0 0 0 .863-.863.863.863 0 1 0-1.726 0c0 .476.387.863.863.863ZM6.876 11.87h2.578c.285 0 .507-.203.507-.489a.493.493 0 0 0-.507-.488h-.711V7.877c0-.38-.19-.628-.546-.628H6.99a.497.497 0 0 0-.508.489c0 .285.228.489.508.489h.647v2.666h-.762a.492.492 0 0 0-.501.488c0 .286.222.49.501.49Z" />,
  );
