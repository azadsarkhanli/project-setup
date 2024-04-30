import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { track } from '../../../common/events';
import { useBookFile } from '../../../common/useBookFile';
import { PublicationFormat } from '../graphql';
import { hasEbookFile, removeEbookFile, setEbookFile } from '../reducer/files';

export const useConnectedBookFile = (
  id: string,
  format: PublicationFormat,
  trackingRef?: string,
) => {
  const dispatch = useDispatch();
  const { download, removeFile, checkFile, path, ...props } = useBookFile(
    id,
    format,
  );
  const hasFileInState = useSelector(hasEbookFile(id));

  const handleCheckFile = useCallback(async () => {
    const status = await checkFile();
    if (hasFileInState && status === 'online') {
      dispatch(removeEbookFile({ id }));
    }
    if (!hasFileInState && path && status === 'offline') {
      dispatch(setEbookFile({ id, path }));
    }
  }, [checkFile, dispatch, hasFileInState, id, path]);

  const handleDownload = useCallback(
    async (downloadUri: string) => {
      const result = await download(downloadUri);
      if (result.ok) {
        dispatch(setEbookFile({ id, path: result.path }));
        track([
          'book_actions',
          { book_id: id, download: true, tracked_from: trackingRef },
        ]);
      }
    },
    [dispatch, download, id, trackingRef],
  );

  const handleRemoveFile = useCallback(async () => {
    const success = await removeFile();

    if (success) {
      dispatch(removeEbookFile({ id }));
      track([
        'book_actions',
        { book_id: id, delete: true, tracked_from: trackingRef },
      ]);
    }
  }, [dispatch, id, removeFile, trackingRef]);

  return {
    ...props,
    checkFile: handleCheckFile,
    download: handleDownload,
    removeFile: handleRemoveFile,
    path,
  };
};
