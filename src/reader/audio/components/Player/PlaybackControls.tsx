import { Box, HStack, IconButton, Spinner } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  PauseCircleIcon,
  PlayCircleIcon,
} from '../../../../common/components/icons';
import {
  GoBackward15Icon,
  GoForward30Icon,
  PauseIcon,
  PlayIcon,
} from '../../../../common/components/iconsOld';
import { PlaybackState } from '../../context/PlayerContext';

type PlaybackControlsProps = {
  variant: 'normal' | 'compact';
  onPlay: () => void;
  onPause: () => void;
  onBackward: () => void;
  onForward?: () => void;
  playbackState: PlaybackState;
} & IHStackProps;

export const PlaybackControls: FC<PlaybackControlsProps> = ({
  variant,
  onPlay,
  onPause,
  onBackward,
  onForward,
  playbackState,
  ...props
}) => {
  const isPlaying = playbackState === PlaybackState.Playing;
  const isReady =
    playbackState === PlaybackState.Ready ||
    playbackState === PlaybackState.Paused ||
    playbackState === PlaybackState.Stopped ||
    playbackState === PlaybackState.None;

  const { t } = useTranslation('player');

  if (variant === 'compact') {
    return (
      <HStack space="2" alignItems="center">
        <IconButton
          size="md"
          colorScheme="primary"
          variant="unstyled"
          p="2"
          onPress={onBackward}
          icon={<GoBackward15Icon color="primary.600" size="lg" />}
        />
        <IconButton
          size="md"
          colorScheme="primary"
          variant="unstyled"
          p="1"
          onPress={isPlaying ? onPause : onPlay}
          icon={
            isPlaying ? (
              <PauseCircleIcon color="primary.600" size="xl" />
            ) : isReady ? (
              <PlayCircleIcon color="primary.600" size="xl" />
            ) : (
              <Box size="8" justifyContent="center">
                <Spinner size="sm" />
              </Box>
            )
          }
        />
      </HStack>
    );
  }

  return (
    <HStack justifyContent="center" alignItems="center" {...props}>
      <IconButton
        colorScheme="primary"
        variant="unstyled"
        accessibilityLabel={t('playbackControls.buttonBackwardLabel')}
        onPress={onBackward}
        icon={<GoBackward15Icon size="xl" color="primary.600" />}
      />
      <IconButton
        colorScheme="primary"
        variant="unstyled"
        accessibilityLabel={t(
          isPlaying
            ? 'playbackControls.buttonPauseLabel'
            : 'playbackControls.buttonPlayLabel',
        )}
        onPress={isPlaying ? onPause : onPlay}
        icon={
          isPlaying ? (
            <PauseIcon size="2xl" color="primary.600" />
          ) : isReady ? (
            <PlayIcon size="2xl" color="primary.600" />
          ) : (
            <Box size="16" justifyContent="center">
              <Spinner size="lg" />
            </Box>
          )
        }
        ml="3"
        mr="3"
        disabled={!isPlaying && !isReady}
      />

      <IconButton
        colorScheme="primary"
        variant="unstyled"
        accessibilityLabel={t('playbackControls.buttonForwardLabel')}
        onPress={onForward}
        icon={<GoForward30Icon size="xl" color="primary.600" />}
      />
    </HStack>
  );
};
