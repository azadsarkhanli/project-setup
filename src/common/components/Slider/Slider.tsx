import { Box, ISliderProps, Slider as BaseSlider } from 'native-base';
import {
  ISliderThumbProps,
  ISliderTrackFilledProps,
  ISliderTrackProps,
} from 'native-base/lib/typescript/components/primitives/Slider/types';
import React, { FC } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { SliderSteps } from './SliderSteps';

export type SliderProps = ISliderProps & {
  hasSteps?: boolean;
  hasTrack?: boolean;
  hasFilledTrack?: boolean;
  thumbProps?: ISliderThumbProps;
  trackProps?: ISliderTrackProps;
  filledTrackProps?: ISliderTrackFilledProps;
};

export const Slider: FC<SliderProps> = props => {
  const {
    hasSteps,
    hasTrack,
    hasFilledTrack,
    thumbProps,
    trackProps,
    filledTrackProps,
  } = props;
  return (
    <BaseSlider {...props}>
      {hasTrack || hasFilledTrack ? (
        <BaseSlider.Track {...trackProps}>
          {hasFilledTrack ? (
            <BaseSlider.FilledTrack {...filledTrackProps} />
          ) : (
            <></>
          )}
        </BaseSlider.Track>
      ) : (
        <></>
      )}
      {hasSteps ? <SliderSteps /> : <></>}
      <BaseSlider.Thumb
        // thumb left and right padding is 6

        ml={2.5}
        {...thumbProps}
      >
        {/* https://github.com/facebook/react-native/issues/14295#issuecomment-486570617 */}
        <TouchableWithoutFeedback
          onPress={() => {
            /* do nothing */
          }}
        >
          {/* PA-666 - making hit area bigger */}
          <Box
            position="absolute"
            top={-6}
            bottom={-6}
            left={-6}
            right={-6}
            bg="transparent"
          />
        </TouchableWithoutFeedback>
      </BaseSlider.Thumb>
    </BaseSlider>
  );
};
