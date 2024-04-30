import { VStack, useDisclose, Button } from 'native-base';
import React, { FC, useCallback, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { AlertRemoveConfirmation } from '../../../../common/components/AlertRemoveConfirmation';
import { DownloadProgress } from '../../../../common/components/DownloadProgress';
import {
  DownloadOutlineIcon,
  TrashOutlineIcon,
} from '../../../../common/components/icons';
import { Screen } from '../../../../common/components/Screen';
import { ScreenHeader } from '../../../../common/components/ScreenHeader';
import { ProductDownloadProps } from '../../../../features/catalog/components/ProductDownload';
import { usePlayerContext } from '../../context/PlayerContext';
import { PlayerMenu } from '../PlayerMenu/PlayerMenu';

import { AudiobookCover } from './AudiobookCover';
import { AudiobookSummary } from './AudiobookSummary';
import { PlaybackControls } from './PlaybackControls';
import { PlaybackProgress } from './PlaybackProgress';

type PlayerProps = {
  onGoBack: () => void;
  withDevicesMenu?: boolean;
  position: number;
  duration: number;
  downloadProps?: Pick<
    ProductDownloadProps,
    'cancel' | 'download' | 'downloadProgress' | 'fileStatus' | 'removeFile'
  > | null;
  changePositionBy: (seconds: number) => void;
  changePositionShallow: (position: number) => void;
  changePositionShallowEnd: (position: number) => void;
};

export const Player: FC<PlayerProps> = ({
  onGoBack,
  position,
  duration,
  downloadProps,
  changePositionBy,
  changePositionShallow,
  changePositionShallowEnd,
}) => {
  const { onPause, onPlay, publication, playbackState } = usePlayerContext();

  useEffect(() => {
    if (!publication) {
      onGoBack();
    }
  }, [onGoBack, publication]);

  const onForward = useCallback(() => changePositionBy(30), [changePositionBy]);
  const width: number = Dimensions.get('window').width;
  const onBackward = useCallback(
    () => changePositionBy(-15),
    [changePositionBy],
  );

  const {
    isOpen: isRemoveAlertOpen,
    onOpen: onRemoveAlertOpen,
    onClose: onRemoveAlertClose,
  } = useDisclose();

  const onPressConfirmRemoveFile = useCallback(() => {
    downloadProps?.removeFile();
    onRemoveAlertClose();
  }, [downloadProps, onRemoveAlertClose]);

  if (!publication) {
    return null;
  }

  const rightContent = () => {
    switch (downloadProps?.fileStatus) {
      case 'online':
        return {
          element: <DownloadOutlineIcon size="md" color={'primary.600'} />,
          onPress: downloadProps?.download,
        };
      case 'downloading':
        return {
          element: (
            <DownloadProgress progress={downloadProps?.downloadProgress} />
          ),
          onPress: downloadProps?.cancel,
        };
      case 'offline':
        return {
          element: <TrashOutlineIcon size="md" color={'primary.600'} />,
          onPress: onRemoveAlertOpen,
        };
    }
  };

  return (
    <>
      <Screen
        withoutScroll
        header={
          <ScreenHeader
            onGoBack={onGoBack}
            rightContent={
              downloadProps &&
              downloadProps.fileStatus !== 'checking' && (
                <Button
                  size={'sm'}
                  variant={'unstyled'}
                  onPress={rightContent()?.onPress}
                >
                  {rightContent()?.element}
                </Button>
              )
            }
          />
        }
        withBottomMenu
      >
        <VStack h="full">
          <AudiobookCover
            my={width > 370 ? 2 : 0}
            thumbnailUri={publication.thumbnailUri}
            alignSelf="center"
            screenWidth={width}
          />
          <AudiobookSummary
            mb={width > 370 ? '6' : '4'}
            mt={4}
            title={publication.title}
            authorsFormatted={publication.authorsFormatted}
            screenWidth={width}
          />
          <PlaybackProgress
            flex={1}
            px="8"
            mb={width > 370 ? '4' : '0'}
            progress={position}
            duration={duration}
            onJumpToShallow={changePositionShallow}
            onJumpTo={changePositionShallowEnd}
          />

          <PlaybackControls
            variant="normal"
            mb={width > 370 ? 8 : 4}
            playbackState={playbackState}
            onPlay={onPlay}
            onPause={onPause}
            onForward={onForward}
            onBackward={onBackward}
          />
          <PlayerMenu screenWidth={width} />
        </VStack>
      </Screen>
      <AlertRemoveConfirmation
        isOpen={isRemoveAlertOpen}
        onPressConfirmRemoveFile={onPressConfirmRemoveFile}
        onRemoveAlertClose={onRemoveAlertClose}
      />
    </>
  );
};
