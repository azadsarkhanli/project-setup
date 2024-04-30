import { ITextProps, Text } from 'native-base';
import React, { FC } from 'react';

export const ActionsheetHeader: FC<ITextProps> = ({ children, ...props }) => {
  return (
    <Text
      variant="md"
      fontWeight={500}
      textAlign="center"
      color="muted.500"
      _dark={{ color: 'primary.300' }}
      {...props}
    >
      {children}
    </Text>
  );
};
