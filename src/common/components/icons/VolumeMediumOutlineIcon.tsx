import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgVolumeMediumOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.705 4.71a1.124 1.124 0 0 1 1.793.904V18.381c0 .237-.075.471-.217.666l-.002.001a1.125 1.125 0 0 1-1.603.216l-4.287-3.515H4.124A1.125 1.125 0 0 1 3 14.623v-5.25c0-.621.503-1.125 1.124-1.125h3.264l.002-.002 4.285-3.513a.758.758 0 0 1 .03-.024ZM7.443 9.747a.75.75 0 0 1-.054.002h-2.89v4.5h2.89c.346 0 .682.12.95.34h.001l3.658 3V6.409l-3.66 3-.002.002a1.505 1.505 0 0 1-.893.336Zm8.714-1.416a.75.75 0 0 1 1.01.327c.513 1.008.83 2.103.83 3.34 0 1.227-.33 2.344-.829 3.337a.75.75 0 1 1-1.34-.673c.415-.827.67-1.715.67-2.663 0-.966-.245-1.829-.668-2.659a.75.75 0 0 1 .327-1.009Zm3.239-1.96a.75.75 0 0 0-1.296.756c.891 1.529 1.398 2.79 1.398 4.872 0 2.077-.529 3.354-1.4 4.877a.75.75 0 0 0 1.3.745c.954-1.664 1.6-3.2 1.6-5.622 0-2.418-.619-3.94-1.602-5.627Z"
    />
  </Svg>
);

export const VolumeMediumOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.705 4.71a1.124 1.124 0 0 1 1.793.904V18.381c0 .237-.075.471-.217.666l-.002.001a1.125 1.125 0 0 1-1.603.216l-4.287-3.515H4.124A1.125 1.125 0 0 1 3 14.623v-5.25c0-.621.503-1.125 1.124-1.125h3.264l.002-.002 4.285-3.513a.758.758 0 0 1 .03-.024ZM7.443 9.747a.75.75 0 0 1-.054.002h-2.89v4.5h2.89c.346 0 .682.12.95.34h.001l3.658 3V6.409l-3.66 3-.002.002a1.505 1.505 0 0 1-.893.336Zm8.714-1.416a.75.75 0 0 1 1.01.327c.513 1.008.83 2.103.83 3.34 0 1.227-.33 2.344-.829 3.337a.75.75 0 1 1-1.34-.673c.415-.827.67-1.715.67-2.663 0-.966-.245-1.829-.668-2.659a.75.75 0 0 1 .327-1.009Zm3.239-1.96a.75.75 0 0 0-1.296.756c.891 1.529 1.398 2.79 1.398 4.872 0 2.077-.529 3.354-1.4 4.877a.75.75 0 0 0 1.3.745c.954-1.664 1.6-3.2 1.6-5.622 0-2.418-.619-3.94-1.602-5.627Z"
    />,
  );
