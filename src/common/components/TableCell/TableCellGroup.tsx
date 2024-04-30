import flatMap from 'lodash/flatMap';
import { Box, Divider, IBoxProps } from 'native-base';
import React, { FC } from 'react';

export const TableCellGroup: FC<IBoxProps> = ({ children, ...props }) => {
  if (!children) {
    return null;
  }
  const items = Array.isArray(children) ? children : [children];
  return (
    <Box
      borderColor="muted.400"
      borderRadius={8}
      borderWidth={1}
      width="100%"
      {...props}
    >
      {flatMap(items, (value, index, array) =>
        array.length - 1 !== index
          ? [value, <Divider key={`divider-${index}`} />]
          : value,
      )}
    </Box>
  );
};
