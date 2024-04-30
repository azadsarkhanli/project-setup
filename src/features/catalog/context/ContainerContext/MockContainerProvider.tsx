import React, { FC } from 'react';

import { BookCard } from '../../components/BookCard/BookCard';
import { LibraryItem } from '../../components/LibraryItem';

import { ContainerContext } from './ContainerContext';

const value = {
  BookCard,
  LibraryItem,
};

export const MockContainerProvider: FC = ({ children }) => (
  <ContainerContext.Provider value={value}>
    {children}
  </ContainerContext.Provider>
);
