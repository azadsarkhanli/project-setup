import { UserSettings } from '@gyldendaldigital/react-native-readium';
import { useTheme } from 'native-base';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useReaderContext } from '../../context/ReaderContext';
import { ReaderColorTheme } from '../../types';
import { colorThemeModes } from '../ReaderExperienceSettings/useColorThemeOptions';

export const useEffectiveColorTheme = () => {
  const { colorTheme, autoNightMode } = useReaderContext();
  const systemColorScheme = useColorScheme();
  return useMemo(() => {
    if (!autoNightMode || colorThemeModes[colorTheme] === systemColorScheme) {
      return colorTheme;
    }
    return (
      (Object.entries(colorThemeModes).find(
        ([, mode]) => mode === systemColorScheme,
      )?.[0] as ReaderColorTheme) ?? 'default'
    );
  }, [autoNightMode, colorTheme, systemColorScheme]);
};

export const useReadingExperienceUserSettings = (): UserSettings => {
  const colorTheme = useEffectiveColorTheme();
  const { fontSize, fontFamily, lineHeight } = useReaderContext();
  const { colors } = useTheme();

  return {
    appearance: `readium-${colorTheme}-on`,
    backgroundColor: colors.readerBackground,
    textColor: colors.readerText,
    fontFamily,
    fontSize,
    pageMargins: 1.5,
    lineHeight,
  };
};
