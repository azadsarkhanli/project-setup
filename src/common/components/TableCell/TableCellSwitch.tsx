import { ISwitchProps, Switch } from 'native-base';
import React, { FC } from 'react';

import { TableCell, TableCellProps } from './TableCell';

type TableCellSwitchProps = TableCellProps &
  Pick<ISwitchProps, 'defaultIsChecked' | 'isChecked' | 'onToggle'> & {
    switchProps?: Partial<ISwitchProps>;
  };

export const TableCellSwitch: FC<TableCellSwitchProps> = ({
  defaultIsChecked,
  isChecked,
  onToggle,
  switchProps,
  ...props
}) => (
  <TableCell
    {...props}
    rightContent={
      <Switch
        defaultIsChecked={defaultIsChecked}
        isChecked={isChecked}
        onToggle={onToggle}
        {...switchProps}
      />
    }
  />
);
