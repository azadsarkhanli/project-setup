import { Box, IBoxProps, Switch, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { MoonYesIcon } from '../../../../common/components/iconsOld';

export type AutoNightModeSelectorProps = IBoxProps & {
  autoNightMode: boolean;
  onToggle: () => void;
};

export const AutoNightModeSelector: FC<AutoNightModeSelectorProps> = ({
  autoNightMode,
  onToggle,
  ...props
}) => {
  const { t } = useTranslation('reader');

  return (
    <VStack>
      <Box
        mt="2"
        px="4"
        py="2.5"
        alignItems="center"
        flexDirection="row"
        {...props}
      >
        <MoonYesIcon size="md" color="secondary.500" />
        <Text variant="lg" flex={1} ml="3" _dark={{ color: 'secondary.500' }}>
          {t('readerMenu.readingExperience.autoNightMode.label')}
        </Text>
        <Switch
          accessibilityLabel={t(
            'readerMenu.readingExperience.autoNightMode.switchLabel',
          )}
          size="sm"
          isChecked={autoNightMode}
          onToggle={onToggle}
        />
      </Box>
    </VStack>
  );
};
