import { IBoxProps, ISliderProps } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TextOutlineIcon } from '../../../../common/components/icons';
import { Slider } from '../../../../common/components/Slider';
import { ReaderSettingSliderSection } from '../../../common/components/ReaderSettingSliderSection/ReaderSettingSliderSection';

export type FontSizeSettingProps = ISliderProps & {
  value: number;
  onChange?: (value: number) => void;
  containerProps?: Partial<IBoxProps>;
};

export const FontSizeSetting: FC<FontSizeSettingProps> = ({
  containerProps,
  ...props
}) => {
  const { t } = useTranslation('reader');

  return (
    <ReaderSettingSliderSection
      title={t('readerMenu.readingExperience.fontSize')}
      startIcon={<TextOutlineIcon size="sm" color="primary.600" />}
      endIcon={<TextOutlineIcon size="md" color="primary.600" />}
      {...containerProps}
    >
      <Slider
        accessibilityLabel={t('readerMenu.readingExperience.fontSize')}
        minValue={60}
        maxValue={200}
        step={20}
        colorScheme="primary"
        size="sm"
        {...props}
        hasTrack={true}
        hasSteps={true}
      />
    </ReaderSettingSliderSection>
  );
};
