import React, { FC } from 'react';

import { LoadingScreen } from './LoadingScreen';

type Props = {
  isLoading?: boolean;
};

export const LoadingGate: FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <LoadingScreen />;
  }
  return <>{children}</>;
};
