import DeviceBrightness from '@adrianso/react-native-device-brightness';
import { IBoxProps, ISliderProps } from 'native-base';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useEffectOnce from 'react-use/lib/useEffectOnce';

import {
  SunnyLessOutlineIcon,
  SunnyOutlineIcon,
} from '../../../../common/components/icons';
import { Slider } from '../../../../common/components/Slider';
import { track } from '../../../../common/events';
import { captureException } from '../../../../common/utils/logger';
import { ReaderSettingSliderSection } from '../../../common/components/ReaderSettingSliderSection/ReaderSettingSliderSection';

export type DisplayBrightnessSettingProps = ISliderProps & {
  onChange?: (value: number) => void;
  containerProps?: Partial<IBoxProps>;
};

export const DisplayBrightnessSetting: FC<DisplayBrightnessSettingProps> = ({
  onChange,
  containerProps,
  ...props
}) => {
  const { t } = useTranslation('reader');
  const [brightness, setBrightness] = useState(0);

  useEffectOnce(() => {
    const initBrightness = async () => {
      let value = await DeviceBrightness.getBrightnessLevel();
      if (value >= 0) {
        setBrightness(value);
        return;
      }
      value = await DeviceBrightness.getSystemBrightnessLevel();
      if (value >= 0) {
        setBrightness(value);
      }
    };
    initBrightness().catch(e => captureException(e));
  });

  const handleChange = useCallback(
    (sliderValue: number) => {
      const newBrightness = Math.round(sliderValue) / 100;
      setBrightness(newBrightness);
      DeviceBrightness.setBrightnessLevel(newBrightness);
      track(['reader_brightness_edited']);
      if (onChange) {
        onChange(newBrightness);
      }
    },
    [onChange],
  );

  return (
    <ReaderSettingSliderSection
      title={t('readerMenu.readingExperience.displayBrightness')}
      startIcon={<SunnyLessOutlineIcon size="md" color="primary.600" />}
      endIcon={<SunnyOutlineIcon size="md" color="primary.600" />}
      {...containerProps}
    >
      <Slider
        accessibilityLabel={t('readerMenu.readingExperience.displayBrightness')}
        value={Math.round(brightness * 100)}
        minValue={0}
        maxValue={100}
        colorScheme="primary"
        size="sm"
        onChange={handleChange}
        hasTrack={true}
        {...props}
      />
    </ReaderSettingSliderSection>
  );
};
