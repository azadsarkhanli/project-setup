import { ComponentTheme } from 'native-base';
import { IProgressProps } from 'native-base/lib/typescript/components/composites/Progress';

export const Progress: ComponentTheme = {
  baseStyle: ({ colorScheme }: IProgressProps) => ({
    bg: `${colorScheme}.300`,
    _filledTrack: {
      bg: `${colorScheme}.500`,
    },
  }),
};
