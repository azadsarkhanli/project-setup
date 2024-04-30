import React, { FC } from 'react';

import { BookCardContainerProps } from '../../context/ContainerContext/ContainerContext';
import { useResolvedPublication } from '../../hooks/useResolvedPublication';

import { LibraryItem } from './LibraryItem';

export const LibraryItemContainer: FC<BookCardContainerProps> = ({
  book,
  ...props
}) => {
  const resolvedPublication = useResolvedPublication(book);

  return <LibraryItem book={resolvedPublication} {...props} />;
};
