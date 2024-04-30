import { Box, HStack } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React, { FC, ReactNode } from 'react';

type ReaderMenuProps = {
  children: ReactNode;
  _stack?: IHStackProps;
};

export const ReaderMenu: FC<ReaderMenuProps> = ({ children, _stack }) => {
  return (
    <Box
      width="full"
      background="primary.100"
      borderColor="muted.300"
      borderTopWidth={1}
      _dark={{ background: 'secondary.900', borderColor: 'secondary.900' }}
    >
      <HStack
        mb={8}
        mx={18}
        mt={2}
        justifyContent="space-between"
        alignItems="center"
        {..._stack}
      >
        {children}
      </HStack>
    </Box>
  );
};
