import { IBoxProps, ISliderProps } from 'native-base';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  LineHeightBiggerOutlineIcon,
  LineHeightSmallerOutlineIcon,
} from '../../../../common/components/icons';
import { Slider } from '../../../../common/components/Slider';
import { ReaderSettingSliderSection } from '../../../common/components/ReaderSettingSliderSection/ReaderSettingSliderSection';

export type LineHeightSettingProps = ISliderProps & {
  value: number;
  onChange?: (value: number) => void;
  containerProps?: Partial<IBoxProps>;
};

export const LineHeightSetting: FC<LineHeightSettingProps> = ({
  containerProps,
  ...props
}) => {
  const { t } = useTranslation('reader');

  return (
    <ReaderSettingSliderSection
      title={t('readerMenu.readingExperience.lineSpacing')}
      startIcon={<LineHeightSmallerOutlineIcon size="md" color="primary.600" />}
      endIcon={<LineHeightBiggerOutlineIcon size="md" color="primary.600" />}
      {...containerProps}
    >
      <Slider
        accessibilityLabel={t('readerMenu.readingExperience.lineSpacing')}
        minValue={1}
        maxValue={2}
        step={0.25}
        colorScheme="primary"
        size="sm"
        {...props}
        hasTrack={true}
        hasSteps={true}
      />
    </ReaderSettingSliderSection>
  );
};
