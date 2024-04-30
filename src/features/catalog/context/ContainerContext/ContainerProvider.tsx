import React, { FC } from 'react';

import { BookCardContainer } from '../../components/BookCard/BookCardContainer';
import { LibraryItemContainer } from '../../components/LibraryItem/LibraryItemContainer';

import { ContainerContext } from './ContainerContext';

const value = {
  BookCard: BookCardContainer,
  LibraryItem: LibraryItemContainer,
};

export const ContainerProvider: FC = ({ children }) => (
  <ContainerContext.Provider value={value}>
    {children}
  </ContainerContext.Provider>
);
