import { Box, HStack, IBoxProps, Pressable, VStack } from 'native-base';
import React, { FC } from 'react';

import { ReaderColorTheme } from '../../types';

import { ColorModeOption, useColorThemeOptions } from './useColorThemeOptions';

export type ColorModeSelectorProps = IBoxProps & {
  colorTheme: ReaderColorTheme;
  onChange: (theme: ColorModeOption) => void;
};

export const ColorModeSelector: FC<ColorModeSelectorProps> = ({
  colorTheme,
  onChange,
  ...props
}) => {
  const options = useColorThemeOptions();

  return (
    <VStack {...props}>
      <HStack space="4" width="100%">
        {options.map(option => (
          <ColorModeButton
            key={option.theme}
            onPress={() => onChange(option)}
            option={option}
            isActive={option.theme === colorTheme}
          />
        ))}
      </HStack>
    </VStack>
  );
};

type ColorModeButtonProps = {
  option: ColorModeOption;
  isActive: boolean;
  onPress: () => void;
};

const ColorModeButton: FC<ColorModeButtonProps> = ({
  option,
  isActive,
  onPress,
}) => {
  const { bg, border, label, theme } = option;

  return (
    <Box flex={1}>
      <Pressable key={theme} onPress={onPress} accessibilityLabel={label}>
        <Box
          bg={bg}
          borderColor={isActive ? 'primary.600' : border}
          borderRadius="full"
          borderWidth={isActive ? 2 : 1}
          height={8}
          width="100%"
        />
      </Pressable>
    </Box>
  );
};
