import { useCallback, useMemo } from 'react';

import { PublicationFormat } from '../graphql';
import { BaseBook, ResolvedPublication } from '../types';

import { useConnectedBookFile } from './useConnectedBookFile';
import { usePublicationState } from './usePublicationState';

export const useResolvedPublication = (book: BaseBook): ResolvedPublication => {
  const { id } = book;
  const state = usePublicationState(id);

  // TODO: AA-90 remove after format is set on Publication
  const format =
    book.format ??
    // @ts-ignore
    (book.__typename === 'AudiobookPublication'
      ? PublicationFormat.Audiobook
      : PublicationFormat.Ebook);

  return useMemo(
    () => ({
      ...book,
      ...state,
      format,
    }),
    [book, format, state],
  );
};

export const useDownloadAction = ({
  id,
  downloadUri,
  format,
}: ResolvedPublication) => {
  const { download, removeFile } = useConnectedBookFile(id, format, 'homepage');

  const onDownload = useCallback(() => {
    if (!downloadUri) {
      return;
    }
    download(downloadUri);
  }, [download, downloadUri]);

  return {
    onDownload: downloadUri ? onDownload : undefined,
    onRemoveFile: removeFile,
  };
};
