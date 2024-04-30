import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actionsheet, Box, HStack, Text, VStack } from 'native-base';
import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useEffectOnce from 'react-use/lib/useEffectOnce';

import ActionsheetContent from '../../../../common/components/ActionsheetContent';
import { ActionsheetHeader } from '../../../../common/components/ActionsheetHeader';
import { Slider } from '../../../../common/components/Slider';
import { usePlayerContext } from '../../context/PlayerContext';

export type PlaybackSettingsProps = {
  isOpen?: boolean;
  onClose: () => void;
};

const MIN_VALUE = 0.5;
const MAX_VALUE = 3;
const STEP = 0.25;

export const PlaybackSettings: FC<PlaybackSettingsProps> = ({
  isOpen,
  onClose,
}) => {
  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem('@playback_speed', value.toString());
    } catch (e) {
      // saving error
    }
  };
  const [storagePlaybackSpeed, setStoragePlaybackSpeed] = useState<
    number | null
  >(null);
  const { getPlaybackSpeed, onPlaybackSpeedChange } = usePlayerContext();

  useEffectOnce(() => {
    const getStoragePlaybackSpeed = async () => {
      try {
        const value = await AsyncStorage.getItem('@playback_speed');
        if (value !== null) {
          setStoragePlaybackSpeed(parseFloat(value));
          onPlaybackSpeedChange(parseFloat(value));
        } else {
          getPlaybackSpeed().then(val => setStoragePlaybackSpeed(val));
        }
      } catch (e) {
        // error reading value
      }
    };
    getStoragePlaybackSpeed();
  });

  const { t } = useTranslation('player');

  const handleChange = useCallback(
    (value: number) => {
      onPlaybackSpeedChange(value);
      storeData(value);
      setStoragePlaybackSpeed(value);
    },
    [onPlaybackSpeedChange],
  );

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetContent onClose={onClose}>
        <VStack w="full">
          <ActionsheetHeader mb={2}>
            {t('playbackSettings.speed')}
          </ActionsheetHeader>
          <Box mt={8} mb={6} alignItems="center">
            <Text
              variant="lg"
              fontSize={48}
              fontWeight={500}
              _dark={{ color: 'secondary.100' }}
            >{`${
              storagePlaybackSpeed
                ? storagePlaybackSpeed.toFixed(1) === '1.0'
                  ? '1'
                  : storagePlaybackSpeed
                : '1'
            }x`}</Text>
          </Box>
          <Slider
            accessibilityLabel={t('playbackSettings.speedSliderLabel')}
            minValue={MIN_VALUE}
            maxValue={MAX_VALUE}
            value={storagePlaybackSpeed ? storagePlaybackSpeed : 1}
            step={STEP}
            colorScheme="primary"
            size="sm"
            hasTrack={true}
            hasSteps={true}
            onChange={handleChange}
          />
          <HStack justifyContent="space-between" mx={-2}>
            <Text variant="2xs">{`${MIN_VALUE}x`}</Text>
            <Text variant="2xs">{`${MAX_VALUE}x`}</Text>
          </HStack>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};
