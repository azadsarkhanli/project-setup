import { IBoxProps } from 'native-base';
import { ComponentType, createContext } from 'react';

import { BookCardProps } from '../../components/BookCard';
import { LibraryItemProps } from '../../components/LibraryItem';
import { BaseBook } from '../../types';

export type BookCardContainerProps = Pick<
  BookCardProps,
  'isStatusSectionVisible' | 'onPress'
> &
  IBoxProps & {
    book: BaseBook;
  };

export type LibraryItemContainerProps = Pick<LibraryItemProps, 'onPress'> &
  IBoxProps & {
    book: BaseBook;
  };

export type ContainerContextValue = {
  BookCard: ComponentType<BookCardContainerProps>;
  LibraryItem: ComponentType<LibraryItemContainerProps>;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <ContainerContext>.');
};

export const ContainerContext = createContext<ContainerContextValue>({
  BookCard: stub,
  LibraryItem: stub,
});
