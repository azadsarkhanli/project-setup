import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSpeedometerOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="m15.286 10.624-2.226 3.54a1.472 1.472 0 0 1-.329.328 1.412 1.412 0 0 1-1.64-2.298l3.538-2.226a.478.478 0 0 1 .549 0c.21.151.258.445.108.656ZM11.25 7.254v-1.5a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-1.5 0ZM19.5 12.504H18a.75.75 0 1 0 0 1.5h1.5a.75.75 0 0 0 0-1.5ZM4.5 12.504H6a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1 0-1.5ZM8.287 8.48l-1.06-1.06a.75.75 0 0 0-1.061 1.06l1.06 1.061a.75.75 0 0 0 1.061-1.06ZM17.834 8.48l-1.061 1.062a.75.75 0 0 1-1.06-1.061l1.06-1.06a.75.75 0 0 1 1.06 1.06Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.004C5.786 2.004.75 7.038.75 13.25a11.21 11.21 0 0 0 2.828 7.46l.007.008.02.02.011.014a7.046 7.046 0 0 0 .132.144 1.93 1.93 0 0 0 2.831-.022 7.364 7.364 0 0 1 10.838.002 1.93 1.93 0 0 0 2.841.005l.153-.167.007-.009a11.214 11.214 0 0 0 2.828-7.46C23.246 7.034 18.209 2 11.996 2l.004.004Zm0 1.5c5.385 0 9.75 4.362 9.75 9.745a9.711 9.711 0 0 1-2.443 6.455l-.15.164-.024.022a.431.431 0 0 1-.608-.027 8.866 8.866 0 0 0-13.077.025.431.431 0 0 1-.61-.024l-.02-.022a1.123 1.123 0 0 1-.047-.05l-.005-.006a3.102 3.102 0 0 1-.056-.063l-.014-.016a9.711 9.711 0 0 1-2.449-6.46c0-5.385 4.365-9.747 9.75-9.747l.003.004Z"
    />
  </Svg>
);

export const SpeedometerOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="m15.286 10.624-2.226 3.54a1.472 1.472 0 0 1-.329.328 1.412 1.412 0 0 1-1.64-2.298l3.538-2.226a.478.478 0 0 1 .549 0c.21.151.258.445.108.656ZM11.25 7.254v-1.5a.75.75 0 1 1 1.5 0v1.5a.75.75 0 0 1-1.5 0ZM19.5 12.504H18a.75.75 0 1 0 0 1.5h1.5a.75.75 0 0 0 0-1.5ZM4.5 12.504H6a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1 0-1.5ZM8.287 8.48l-1.06-1.06a.75.75 0 0 0-1.061 1.06l1.06 1.061a.75.75 0 0 0 1.061-1.06ZM17.834 8.48l-1.061 1.062a.75.75 0 0 1-1.06-1.061l1.06-1.06a.75.75 0 0 1 1.06 1.06Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.004C5.786 2.004.75 7.038.75 13.25a11.21 11.21 0 0 0 2.828 7.46l.007.008.02.02.011.014a7.046 7.046 0 0 0 .132.144 1.93 1.93 0 0 0 2.831-.022 7.364 7.364 0 0 1 10.838.002 1.93 1.93 0 0 0 2.841.005l.153-.167.007-.009a11.214 11.214 0 0 0 2.828-7.46C23.246 7.034 18.209 2 11.996 2l.004.004Zm0 1.5c5.385 0 9.75 4.362 9.75 9.745a9.711 9.711 0 0 1-2.443 6.455l-.15.164-.024.022a.431.431 0 0 1-.608-.027 8.866 8.866 0 0 0-13.077.025.431.431 0 0 1-.61-.024l-.02-.022a1.123 1.123 0 0 1-.047-.05l-.005-.006a3.102 3.102 0 0 1-.056-.063l-.014-.016a9.711 9.711 0 0 1-2.449-6.46c0-5.385 4.365-9.747 9.75-9.747l.003.004Z"
    />,
  );