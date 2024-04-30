import React, { FC } from 'react';

import { ProductModal } from '../../features/catalog/components/ProductModal';

import { useProductModalScreen } from './useProductModalScreen';

export const ProductModalScreen: FC = () => {
  const { publication, onOpen } = useProductModalScreen();

  return <ProductModal publication={publication} onOpen={onOpen} />;
};
