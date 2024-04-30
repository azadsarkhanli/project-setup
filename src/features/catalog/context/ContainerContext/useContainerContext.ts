import { useContext } from 'react';

import { ContainerContext } from './ContainerContext';

export const useContainerContext = () => {
  return useContext(ContainerContext);
};
