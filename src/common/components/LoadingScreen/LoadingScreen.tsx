import React, { FC } from 'react';

import { Screen, ScreenProps } from '../Screen';

import { LoadingSpinner } from './LoadingSpinner';

export type LoadingScreenProps = ScreenProps;

export const LoadingScreen: FC<ScreenProps> = props => {
  return (
    <Screen justifyContent="center" withoutScroll {...props}>
      <LoadingSpinner />
    </Screen>
  );
};
