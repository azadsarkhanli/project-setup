import { ChevronDownIcon } from 'native-base';
import { Text, IconButton, Box, IBoxProps, View } from 'native-base';
import React, { FC, ReactNode } from 'react';

import ArkLogoBasePrimary from '../logo/ArkLogoBasePrimary';

export type ScreenHeaderProps = IBoxProps & {
  leftContent?: ReactNode;
  onGoBack?: () => void;
  leftLogo?: boolean;
  centerLogo?: boolean;
  title?: string;
  subtitle?: string;
  rightContent?: ReactNode;
  sideContentWidth?: number;
};

export const ScreenHeader: FC<ScreenHeaderProps> = ({
  leftContent,
  onGoBack,
  leftLogo,
  centerLogo,
  title,
  subtitle,
  rightContent,
  sideContentWidth = 40,
  ...props
}) => {
  const left = leftContent ? (
    leftContent
  ) : leftLogo ? (
    <ArkLogoBasePrimary />
  ) : onGoBack ? (
    <IconButton
      colorScheme="primary"
      variant="unstyled"
      icon={<ChevronDownIcon size="lg" />}
      onPress={onGoBack}
    />
  ) : (
    <View />
  );

  const center = centerLogo ? (
    <Box mx="auto">
      <ArkLogoBasePrimary />
    </Box>
  ) : (
    title && (
      <>
        <Text width="100%" textAlign="center" variant="h4" noOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text width="100%" textAlign="center" variant="2xs" noOfLines={1}>
            {subtitle}
          </Text>
        )}
      </>
    )
  );

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      mx={1.5}
      my={0.5}
      height={10}
      {...props}
    >
      <Box position="absolute" width="100%" px={`${sideContentWidth + 16}px`}>
        {center}
      </Box>
      {left}
      {rightContent}
    </Box>
  );
};
