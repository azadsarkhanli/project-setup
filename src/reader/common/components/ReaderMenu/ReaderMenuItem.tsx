import { IconButton, IIconProps, IIconButtonProps } from 'native-base';
import React, { ComponentType, FC } from 'react';

export type ReaderMenuItemProps = IIconButtonProps & {
  isActive?: boolean;
  Icon: ComponentType<IIconProps>;
};

export const ReaderMenuItem: FC<ReaderMenuItemProps> = ({
  Icon,
  isActive,
  _icon,
  ...props
}) => {
  return (
    <IconButton
      colorScheme={isActive ? 'primary' : 'muted'}
      _icon={{
        color: isActive ? 'primary.600' : 'muted.500',
        ..._icon,
      }}
      icon={<Icon size="lg" />}
      variant="unstyled"
      {...props}
    />
  );
};
