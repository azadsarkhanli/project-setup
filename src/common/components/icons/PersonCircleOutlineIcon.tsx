import { Icon, IIconProps } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SvgPersonCircleOutlineIcon = () => (
  <Svg fill="none" viewBox="0 0 24 24">
    <Path d="M9.645 7.725c.594-.63 1.43-.976 2.354-.976.918 0 1.752.35 2.348.982.604.641.899 1.504.83 2.429-.14 1.839-1.562 3.339-3.178 3.339-1.616 0-3.042-1.5-3.177-3.34-.067-.934.23-1.804.823-2.434Z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12.135c-.074-5.483 4.402-9.96 9.885-9.885 5.258.073 9.54 4.355 9.612 9.614.075 5.483-4.4 9.959-9.884 9.884-5.258-.073-9.54-4.355-9.613-9.613Zm15.545 5.463c.076.07.195.066.265-.01a8.219 8.219 0 0 0 2.187-5.59c0-4.555-3.706-8.26-8.27-8.25-4.562.012-8.305 3.83-8.228 8.39a8.215 8.215 0 0 0 2.188 5.449.188.188 0 0 0 .288-.015 5.808 5.808 0 0 1 1.516-1.386c1.194-.766 2.706-1.188 4.257-1.188 1.552 0 3.064.422 4.258 1.188a5.816 5.816 0 0 1 1.516 1.387c.006.009.014.017.023.025Z"
    />
  </Svg>
);

export const PersonCircleOutlineIcon = (props: IIconProps) =>
  React.createElement(
    Icon,
    {
      viewBox: '0 0 24 24',
      ...props,
    },
    <Path d="M9.645 7.725c.594-.63 1.43-.976 2.354-.976.918 0 1.752.35 2.348.982.604.641.899 1.504.83 2.429-.14 1.839-1.562 3.339-3.178 3.339-1.616 0-3.042-1.5-3.177-3.34-.067-.934.23-1.804.823-2.434Z" />,
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12.135c-.074-5.483 4.402-9.96 9.885-9.885 5.258.073 9.54 4.355 9.612 9.614.075 5.483-4.4 9.959-9.884 9.884-5.258-.073-9.54-4.355-9.613-9.613Zm15.545 5.463c.076.07.195.066.265-.01a8.219 8.219 0 0 0 2.187-5.59c0-4.555-3.706-8.26-8.27-8.25-4.562.012-8.305 3.83-8.228 8.39a8.215 8.215 0 0 0 2.188 5.449.188.188 0 0 0 .288-.015 5.808 5.808 0 0 1 1.516-1.386c1.194-.766 2.706-1.188 4.257-1.188 1.552 0 3.064.422 4.258 1.188a5.816 5.816 0 0 1 1.516 1.387c.006.009.014.017.023.025Z"
    />,
  );