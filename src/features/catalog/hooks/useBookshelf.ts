import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { track } from '../../../common/events';
import { GraphQlNode } from '../../../common/types';
import { useExtractQuery } from '../../../common/utils/extractQuery';
import { useLogGraphQlError } from '../../../common/utils/useLogGraphQlError';
import {
  BookshelfQuery,
  BookshelfQueryVariables,
  PublicationFragment,
  useBookshelfQuery,
} from '../graphql';
import { setBookshelf } from '../reducer/bookshelf';

export type BookshelfPayload = Extract<
  BookshelfQuery['bookshelf'],
  GraphQlNode<'PublicationList'>
>;

export const useBookshelf = (skip = false) => {
  const dispatch = useDispatch();

  const query = useExtractQuery<
    BookshelfQuery,
    BookshelfQueryVariables,
    BookshelfPayload
  >(
    useBookshelfQuery({ skip }),
    'PublicationList',
    payload => payload.bookshelf,
  );

  const items = useMemo(
    () => (query.data?.items ?? []) as PublicationFragment[],
    [query.data?.items],
  );

  useLogGraphQlError('Bookshelf', query.error);

  useEffect(() => {
    dispatch(setBookshelf({ items }));

    track([
      'library_content_loaded',
      {
        total_books: items.length,
        audiobooks: items.filter(i => i.__typename === 'AudiobookPublication')
          .length,
        ebooks: items.filter(i => i.__typename === 'EbookPublication').length,
        book_ids: items.map(i => i.id).join(','),
      },
    ]);
  }, [items, dispatch]);

  return {
    items,
    query,
    error: query.error,
  };
};
