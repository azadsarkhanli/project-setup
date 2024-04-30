import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { bookshelfPublication } from '../reducer/bookshelf';
import { hasEbookFile } from '../reducer/files';
import { publicationState } from '../reducer/knownPublications';
import { PublicationState } from '../types';

export const usePublicationState = (id: string): PublicationState => {
  const isDownloaded = useSelector(hasEbookFile(id));
  const state = useSelector(publicationState(id));
  const bookshelfItem = useSelector(bookshelfPublication(id));

  return useMemo(() => {
    return {
      isOwned: Boolean(bookshelfItem),
      isDownloaded,
      bookmarks: state?.bookmarks || [],
      currentLocator: state?.currentLocator,
      downloadUri: bookshelfItem?.downloadUri,
      progress: state?.currentLocator?.locations?.totalProgression,
      furthestLocator: state?.furthestLocator,
    };
  }, [isDownloaded, state, bookshelfItem]);
};
