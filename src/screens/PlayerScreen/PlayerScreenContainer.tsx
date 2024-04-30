import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useMemo } from 'react';
import useEffectOnce from 'react-use/lib/useEffectOnce';

import { PublicationFormat } from '../..//common/graphql';
import { LoadingGate } from '../../common/components/LoadingGate';
import { RootStackParamList } from '../../common/navigation';
import { useConnectedBookFile } from '../../features/catalog/hooks/useConnectedBookFile';
import { usePlayerProgress } from '../../features/player/usePlayerProgress';
import { Player } from '../../reader/audio/components/Player';
import { usePlayerContext } from '../../reader/audio/context/PlayerContext';

export const PlayerScreenContainer: FC<
  NativeStackScreenProps<RootStackParamList, 'Player'>
> = ({ navigation, route }) => {
  const { id } = route.params;
  const onGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const { publication } = usePlayerContext();
  const {
    position,
    duration,
    changePositionBy,
    changePositionShallow,
    changePositionShallowEnd,
  } = usePlayerProgress();

  const {
    cancel,
    checkFile,
    download,
    fileStatus,
    downloadProgress,
    removeFile,
    // TODO: handle missing publication better, either way the file is not used if publication is null
  } = useConnectedBookFile(
    id,
    publication?.format || PublicationFormat.Audiobook,
    'player',
  );

  const downloadProps = useMemo(() => {
    if (!publication) {
      return null;
    }
    return {
      cancel,
      download: () => download(publication.downloadUri),
      downloadProgress,
      fileStatus,
      removeFile,
    };
  }, [cancel, download, downloadProgress, fileStatus, publication, removeFile]);

  useEffectOnce(() => {
    checkFile();
  });

  return (
    <LoadingGate isLoading={!publication}>
      <Player
        position={position}
        duration={duration}
        changePositionBy={changePositionBy}
        changePositionShallow={changePositionShallow}
        changePositionShallowEnd={changePositionShallowEnd}
        onGoBack={onGoBack}
        downloadProps={downloadProps}
      />
    </LoadingGate>
  );
};
