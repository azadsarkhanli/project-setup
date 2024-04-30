import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { Actionsheet, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';

import ActionsheetContent from '../../../../common/components/ActionsheetContent';
import { track } from '../../../../common/events';
import { useReaderContext } from '../../context/ReaderContext';
import { useEffectiveColorTheme } from '../EpubReader/useReadingExperienceUserSettings';

import { ColorModeSelector } from './ColorModeSelector';
import { DisplayBrightnessSetting } from './DisplayBrightnessSetting';
import { FontFamilySetting } from './FontFamilySetting';
import { FontSizeSetting } from './FontSizeSetting';
import { LineHeightSetting } from './LineHeightSetting';
import { ColorModeOption } from './useColorThemeOptions';

export type ReaderExperienceSettingsProps = {
  isOpen?: boolean;
  onClose: () => void;
};

export const ReaderExperienceSettings: FC<ReaderExperienceSettingsProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    setColorTheme,
    setAutoNightMode,
  } = useReaderContext();
  const colorTheme = useEffectiveColorTheme();

  const onFontFamilyChange = (font: UserSettings['fontFamily']) => {
    setFontFamily(font);
  };

  const onColorThemeChange = (option: ColorModeOption) => {
    setColorTheme(option.theme);
    setAutoNightMode(false);
  };

  useEffect(() => {
    if (isOpen) {
      track(['reader_settings_opened']);
    }
  }, [isOpen]);

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      _backdrop={{
        opacity: 0,
      }}
    >
      <ActionsheetContent
        borderWidth={0.5}
        borderColor="muted.400"
        onClose={onClose}
      >
        <VStack mt={4} space={4}>
          <FontFamilySetting value={fontFamily} onChange={onFontFamilyChange} />
          <FontSizeSetting value={fontSize} onChange={setFontSize} />
          <LineHeightSetting value={lineHeight} onChange={setLineHeight} />
          <DisplayBrightnessSetting />
          <ColorModeSelector
            mt={2}
            colorTheme={colorTheme}
            onChange={onColorThemeChange}
          />
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};
