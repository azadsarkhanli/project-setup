import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgStarOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.999 1.5a.75.75 0 0 1 .713.518l2.269 6.981h7.516a.75.75 0 0 1 .425 1.368l-6.094 4.18 2.35 6.96a.75.75 0 0 1-1.151.848l-6.028-4.368-6.028 4.368a.75.75 0 0 1-1.151-.847l2.35-6.962-6.094-4.179A.75.75 0 0 1 1.5 9h7.517l2.268-6.981A.75.75 0 0 1 12 1.5Zm0 3.176-1.724 5.305a.75.75 0 0 1-.714.518H3.92l4.567 3.131a.75.75 0 0 1 .286.858l-1.78 5.274 4.567-3.309a.75.75 0 0 1 .88 0l4.566 3.31-1.78-5.275a.75.75 0 0 1 .287-.858l4.566-3.131h-5.642a.75.75 0 0 1-.713-.518l-1.724-5.305Z"
    />
  </Svg>
);

export const StarOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.999 1.5a.75.75 0 0 1 .713.518l2.269 6.981h7.516a.75.75 0 0 1 .425 1.368l-6.094 4.18 2.35 6.96a.75.75 0 0 1-1.151.848l-6.028-4.368-6.028 4.368a.75.75 0 0 1-1.151-.847l2.35-6.962-6.094-4.179A.75.75 0 0 1 1.5 9h7.517l2.268-6.981A.75.75 0 0 1 12 1.5Zm0 3.176-1.724 5.305a.75.75 0 0 1-.714.518H3.92l4.567 3.131a.75.75 0 0 1 .286.858l-1.78 5.274 4.567-3.309a.75.75 0 0 1 .88 0l4.566 3.31-1.78-5.275a.75.75 0 0 1 .287-.858l4.566-3.131h-5.642a.75.75 0 0 1-.713-.518l-1.724-5.305Z"
    />,
  );
