import { Pressable } from 'native-base';
import React, { FC } from 'react';

import { ChevronForwardIcon } from '../icons';

import { TableCell, TableCellProps } from './TableCell';

type TableCellLinkProps = TableCellProps & {
  onPress?: () => void;
};

export const TableCellLink: FC<TableCellLinkProps> = ({
  onPress,
  colorScheme = 'primary',
  variant = 'solid',
  ...props
}) => (
  <Pressable onPress={onPress}>
    {({ isPressed }) => (
      <TableCell
        colorScheme={colorScheme}
        variant={variant}
        rightContent={<ChevronForwardIcon color={'muted.500'} size="md" />}
        bg={
          variant === 'solid'
            ? isPressed
              ? `${colorScheme}.300`
              : `${colorScheme}.200`
            : undefined
        }
        {...props}
      />
    )}
  </Pressable>
);
