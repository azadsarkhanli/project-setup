import { useCallback, useState } from 'react';
import ReactNativeBlobUtil from 'react-native-blob-util';

import { PublicationFormat } from './graphql';
import { useDownload } from './useDownload';
import { captureException } from './utils/logger';
export const EBOOKS_FOLDER = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/eBooks`;

export type FileStatus = 'checking' | 'online' | 'downloading' | 'offline';

const getExtension = (format: PublicationFormat) => {
  switch (format) {
    case PublicationFormat.Audiobook:
      return 'mp3';
    case PublicationFormat.Ebook:
      return 'epub';
  }
};

export const useBookFile = (id: string, format: PublicationFormat) => {
  const download = useDownload();
  const [fileStatus, setFileStatus] = useState<FileStatus>('checking');

  const path = `${EBOOKS_FOLDER}/${id}.${getExtension(format)}`;

  const checkFile = useCallback(
    async (setInitialStatus = true) => {
      if (setInitialStatus) {
        setFileStatus('checking');
      }
      try {
        const exists = await ReactNativeBlobUtil.fs.exists(path);
        const status = exists ? 'offline' : 'online';
        setFileStatus(status);
        return status;
      } catch (err: unknown) {
        captureException(err as Error);
        throw err;
      }
    },
    [path],
  );

  const handleDownload = useCallback(
    async (downloadUri: string) => {
      setFileStatus('downloading');
      const result = await download.execute(
        downloadUri,
        EBOOKS_FOLDER,
        `${id}.${getExtension(format)}`,
      );
      if (!result.ok) {
        if (result.error) {
          captureException(result.error as Error);
        }
        setFileStatus('online');
      }
      // setTimeout to fix issue on Android AA-82
      setTimeout(() => {
        checkFile(false);
      });
      return result;
    },
    [checkFile, download, format, id],
  );

  const removeFile = useCallback(async () => {
    try {
      const status = await checkFile(false);
      if (status === 'online') {
        setFileStatus(status);
        return;
      }
      await ReactNativeBlobUtil.fs.unlink(path);
      setFileStatus('online');
      return true;
    } catch (err) {
      // TODO show error
      captureException(err as Error);
      return false;
    }
  }, [checkFile, path]);

  return {
    cancel: download.cancel,
    checkFile,
    fileStatus,
    path,
    download: handleDownload,
    downloadProgress: download.progress,
    removeFile,
  };
};
