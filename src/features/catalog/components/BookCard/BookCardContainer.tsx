import React, { FC } from 'react';

import { BookCardContainerProps } from '../../context/ContainerContext/ContainerContext';
import {
  useDownloadAction,
  useResolvedPublication,
} from '../../hooks/useResolvedPublication';

import { BookCard } from './BookCard';

export const BookCardContainer: FC<BookCardContainerProps> = ({
  book,
  ...props
}) => {
  const resolvedPublication = useResolvedPublication(book);
  const { onDownload, onRemoveFile } = useDownloadAction(resolvedPublication);

  return (
    <BookCard
      book={resolvedPublication}
      onDownload={onDownload}
      onRemoveFromDevice={onRemoveFile}
      {...props}
    />
  );
};
