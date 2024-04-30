import { HStack, Text, VStack } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Slider } from '../../../../common/components/Slider';
import { secondsToDuration } from '../../../../features/player/utils';

type PlaybackProgressProps = IVStackProps & {
  progress: number;
  duration: number;
  onJumpTo: (second: number) => void;
  onJumpToShallow: (second: number) => void;
};

export const PlaybackProgress: FC<PlaybackProgressProps> = props => {
  const { t } = useTranslation('player');

  const { duration, progress, onJumpTo, onJumpToShallow } = props;

  const progressDuration = useMemo(
    () => secondsToDuration(progress),
    [progress],
  );

  const leftDuration = useMemo(
    () => secondsToDuration(duration - progress),
    [progress, duration],
  );

  return (
    <VStack {...props}>
      <Slider
        borderWidth={1}
        accessibilityLabel={t('playbackProgress.progressSliderLabel')}
        minValue={0}
        maxValue={duration}
        value={progress}
        step={1}
        onChange={onJumpToShallow}
        onChangeEnd={onJumpTo}
        colorScheme="primary"
        size="sm"
        hasSteps={false}
        hasTrack={true}
        hasFilledTrack={true}
      />
      <HStack justifyContent="space-between" mb="1">
        <Text
          accessibilityHint={t('playbackProgress.progressTimeHint')}
          variant="2xs"
        >
          {t('playbackProgress.progressDuration', progressDuration)}
        </Text>
        <Text
          accessibilityHint={t('playbackProgress.leftTimeHint')}
          variant="2xs"
        >
          {t('playbackProgress.leftDuration', leftDuration)}
        </Text>
      </HStack>
    </VStack>
  );
};
