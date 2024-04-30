import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgSleepIcon = () => (
  <Svg fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.557 7.973c0 .336-.216.533-.565.533H2.955c-.406 0-.68-.26-.68-.635 0-.216.052-.362.21-.546L6.002 3.08v-.026H2.796c-.349 0-.565-.197-.565-.533 0-.324.216-.527.565-.527h3.949c.47 0 .749.254.749.66 0 .21-.064.375-.28.635L3.78 7.42v.026h3.212c.35 0 .565.197.565.527Zm5.745 3.44c0 .33-.203.52-.553.52H9.55c-.393 0-.654-.247-.654-.615 0-.203.064-.35.248-.565l2.672-3.231v-.025H9.398c-.343 0-.546-.19-.546-.508 0-.324.203-.514.546-.514h3.117c.45 0 .717.24.717.634 0 .21-.083.375-.311.654l-2.596 3.123v.026h2.425c.342 0 .552.19.552.501ZM7.9 14.987c0 .298-.197.482-.514.482H4.82c-.368 0-.615-.235-.615-.565 0-.21.05-.33.222-.54l2.088-2.52v-.025h-1.86c-.317 0-.508-.177-.508-.482 0-.298.19-.482.508-.482h2.546c.387 0 .634.209.634.564 0 .204-.076.381-.292.641L5.551 14.48v.025h1.835c.317 0 .514.178.514.483Z"
    />
  </Svg>
);

export const SleepIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 16 16',
      ...props,
    },
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.557 7.973c0 .336-.216.533-.565.533H2.955c-.406 0-.68-.26-.68-.635 0-.216.052-.362.21-.546L6.002 3.08v-.026H2.796c-.349 0-.565-.197-.565-.533 0-.324.216-.527.565-.527h3.949c.47 0 .749.254.749.66 0 .21-.064.375-.28.635L3.78 7.42v.026h3.212c.35 0 .565.197.565.527Zm5.745 3.44c0 .33-.203.52-.553.52H9.55c-.393 0-.654-.247-.654-.615 0-.203.064-.35.248-.565l2.672-3.231v-.025H9.398c-.343 0-.546-.19-.546-.508 0-.324.203-.514.546-.514h3.117c.45 0 .717.24.717.634 0 .21-.083.375-.311.654l-2.596 3.123v.026h2.425c.342 0 .552.19.552.501ZM7.9 14.987c0 .298-.197.482-.514.482H4.82c-.368 0-.615-.235-.615-.565 0-.21.05-.33.222-.54l2.088-2.52v-.025h-1.86c-.317 0-.508-.177-.508-.482 0-.298.19-.482.508-.482h2.546c.387 0 .634.209.634.564 0 .204-.076.381-.292.641L5.551 14.48v.025h1.835c.317 0 .514.178.514.483Z"
    />,
  );
