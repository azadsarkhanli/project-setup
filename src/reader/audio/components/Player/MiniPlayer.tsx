import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, HStack, Pressable, Text, VStack } from 'native-base';
import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { track } from '../../../../common/events';
import { RootStackParamList } from '../../../../common/navigation';
import { secondsToDuration } from '../../../../features/player/utils';
import { usePlayerContext } from '../../context/PlayerContext';

import { AudiobookCover } from './AudiobookCover';
import { PlaybackControls } from './PlaybackControls';

type MiniPlayerProps = {
  position: number;
  duration: number;
  changePositionBy: (seconds: number) => void;
};

export const MiniPlayer: FC<MiniPlayerProps> = ({
  duration,
  position,
  changePositionBy,
}) => {
  const { t } = useTranslation('player');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { onPause, onPlay, publication, playbackState } = usePlayerContext();

  const progress = useMemo(
    () => (position / duration) * 100,
    [position, duration],
  );
  const leftDuration = useMemo(
    () => secondsToDuration(duration - position),
    [position, duration],
  );

  const onMiniPlayerPress = useCallback(() => {
    publication && navigation.navigate('Player', { id: publication.id });
  }, [navigation, publication]);

  const handlePause = useCallback(() => {
    onPause();
    track(['miniplayer', { play_pause_clicked: true }]);
  }, [onPause]);

  const handlePlay = useCallback(() => {
    onPlay();
    track(['miniplayer', { play_pause_clicked: true }]);
  }, [onPlay]);

  const onBackward15 = useCallback(() => {
    changePositionBy(-15);
    track(['miniplayer', { goback15_clicked: true }]);
  }, [changePositionBy]);

  if (!publication) {
    return null;
  }

  return (
    <Pressable bg="primary.100" w="full" onPress={onMiniPlayerPress}>
      <Box w="full" bg="primary.300">
        <Box w={`${progress}%`} bg="primary.600" h="0.5" />
      </Box>
      <HStack
        py="3"
        px="4"
        space="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <AudiobookCover thumbnailUri={publication?.thumbnailUri} w="32px" />
        <VStack space="0.5" justifyContent="center" flex="1">
          <Text
            lineHeight={21}
            fontSize="sm"
            fontWeight={500}
            numberOfLines={1}
          >
            {t('miniPlayer.authorAndTitle', {
              author: publication.authorsFormatted,
              title: publication?.title,
            })}
          </Text>
          <Text
            color="muted.500"
            fontSize="xs"
            lineHeight={18}
            numberOfLines={1}
          >
            {t('miniPlayer.leftDuration', leftDuration)}
          </Text>
        </VStack>
        <PlaybackControls
          variant="compact"
          playbackState={playbackState}
          onPlay={handlePlay}
          onPause={handlePause}
          onBackward={onBackward15}
        />
      </HStack>
    </Pressable>
  );
};
