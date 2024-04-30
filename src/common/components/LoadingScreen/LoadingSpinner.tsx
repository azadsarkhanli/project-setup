import { Box, IBoxProps, Spinner } from 'native-base';
import React, { FC } from 'react';

export const LoadingSpinner: FC<IBoxProps> = props => {
  return (
    <Box flex={1} justifyContent="center" {...props}>
      <Spinner color="primary.300" size="lg" />
    </Box>
  );
};
