import { Box, HStack, IBoxProps } from 'native-base';
import React, { FC, ReactNode } from 'react';

export type ReaderSettingSliderSectionProps = IBoxProps & {
  title: string;
  startIcon: ReactNode;
  endIcon: ReactNode;
};

export const ReaderSettingSliderSection: FC<
  ReaderSettingSliderSectionProps
> = ({ startIcon, endIcon, children, ...props }) => {
  return (
    <Box {...props}>
      {children}
      <HStack justifyContent="space-between" alignItems="center" mx={-2}>
        {startIcon}
        {endIcon}
      </HStack>
    </Box>
  );
};
