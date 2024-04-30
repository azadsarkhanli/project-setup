import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useEffect } from 'react';

import { PublicationFragment } from '../../features/catalog/graphql';
import { useConnectedBookFile } from '../../features/catalog/hooks/useConnectedBookFile';
import { AppReaderProvider } from '../../features/reader/AppReaderProvider';
import { Reader } from '../../reader/epub/components/Reader';
import { DownloadScreen } from '../DownloadScreen';

type Props = {
  book: PublicationFragment;
};

export const ReaderScreen: FC<Props> = ({ book }) => {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => navigation.goBack(), [navigation]);

  const { checkFile, fileStatus, path, download, downloadProgress } =
    useConnectedBookFile(book.id, book.format, 'reader');

  useEffect(() => {
    checkFile();
  }, [checkFile]);

  const handleDownload = useCallback(() => {
    download(book.downloadUri);
  }, [book, download]);

  if (!path || fileStatus !== 'offline') {
    return (
      <DownloadScreen
        book={book}
        onDownload={handleDownload}
        onGoBack={onGoBack}
        downloadProgress={downloadProgress}
        fileStatus={fileStatus}
      />
    );
  }

  return (
    <AppReaderProvider publication={book} path={path}>
      <Reader />
    </AppReaderProvider>
  );
};
