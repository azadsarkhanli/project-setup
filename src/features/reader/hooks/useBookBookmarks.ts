import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { BookmarkFilledIcon } from '../../../common/components/iconsOld';
import { track } from '../../../common/events';
import { useArkToast } from '../../../common/utils/useArkToast';
import { Locator } from '../../../features/catalog/types';
import {
  publicationBookmarks,
  addBookmark as addBookmarkAction,
  removeBookmark as removeBookmarkAction,
  undoBookBookmarksChange as undoBookmarksChangeAction,
} from '../../catalog/reducer/knownPublications';

export const useBookBookmarks = (bookId: string | undefined, from: string) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('reader');
  const undoBookmarksChange = useCallback(() => {
    bookId && dispatch(undoBookmarksChangeAction({ bookId }));
  }, [bookId, dispatch]);
  const toastBookmarkAdded = useArkToast(
    BookmarkFilledIcon,
    t('readerMenu.bookmarks.addConfirmation'),
    t('readerMenu.bookmarks.buttonUndo'),
    undoBookmarksChange,
  );
  const toastBookmarkRemoved = useArkToast(
    BookmarkFilledIcon,
    t('readerMenu.bookmarks.removeConfirmation'),
    t('readerMenu.bookmarks.buttonUndo'),
    undoBookmarksChange,
  );

  const bookmarks = useSelector(publicationBookmarks(bookId));

  const addBookmark = useCallback(
    (locator: Locator) => {
      if (bookId) {
        dispatch(
          addBookmarkAction({
            id: bookId,
            bookmark: {
              id: uuid.v4() as string,
              createdAt: new Date().getTime(),
              locator,
            },
          }),
        );
        toastBookmarkAdded.show();
        track(['bookmark_added', { book_id: bookId, from }]);
      }
    },
    [bookId, dispatch, from, toastBookmarkAdded],
  );

  const removeBookmark = useCallback(
    (bookmarkId: string) => {
      if (bookId) {
        dispatch(
          removeBookmarkAction({
            bookId,
            bookmarkId,
          }),
        );
        toastBookmarkRemoved.show();
        track(['bookmark_removed', { book_id: bookId, from }]);
      }
    },
    [bookId, dispatch, from, toastBookmarkRemoved],
  );

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
  };
};
