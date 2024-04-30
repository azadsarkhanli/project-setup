import { Box } from 'native-base';
import React, { FC } from 'react';

export const CircleWithIcon: FC<{
  Icon: React.ElementType;
}> = ({ Icon }): JSX.Element => {
  return (
    <Box
      w={20}
      h={20}
      borderWidth="1"
      borderRadius="full"
      borderColor="primary.300"
      justifyContent="center"
      alignItems="center"
    >
      <Box w={8} h={8}>
        <Icon
          size="full"
          color="secondary.500"
          _dark={{ color: 'secondary.500' }}
        />
      </Box>
    </Box>
  );
};
