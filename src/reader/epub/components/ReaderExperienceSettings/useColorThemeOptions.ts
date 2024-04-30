import { useToken } from 'native-base';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ColorMode, ReaderColorTheme } from '../../types';

export type ColorModeOption = {
  theme: ReaderColorTheme;
  mode: ColorMode;
  label: string;
  bg: string;
  border: string;
};

export const colorThemeModes: Record<ReaderColorTheme, ColorMode> = {
  default: 'light',
  sepia: 'light',
  night: 'dark',
};

export const useColorThemeOptions = () => {
  const { t } = useTranslation('reader');
  const [border, defaultBg, nightBg, sepiaBg] = useToken('colors', [
    'muted.400',
    'white',
    'black',
    'primary.300',
  ]);

  return useMemo<ColorModeOption[]>(
    () => [
      {
        theme: 'default',
        mode: colorThemeModes.default,
        bg: defaultBg,
        border,
        label: t('readerMenu.readingExperience.colorMode.defaultColorsLabel'),
      },
      {
        theme: 'night',
        mode: colorThemeModes.night,
        bg: nightBg,
        border: nightBg,
        label: t('readerMenu.readingExperience.colorMode.nightColorsLabel'),
      },
      {
        theme: 'sepia',
        mode: colorThemeModes.sepia,
        bg: sepiaBg,
        border,
        label: t('readerMenu.readingExperience.colorMode.sepiaColorsLabel'),
      },
    ],
    [border, defaultBg, nightBg, sepiaBg, t],
  );
};
