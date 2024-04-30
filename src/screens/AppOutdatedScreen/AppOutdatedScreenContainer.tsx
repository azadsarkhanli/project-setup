import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { RootStackParamList } from '../../common/navigation';

import { AppOutdatedScreen } from './AppOutdatedScreen';

export type AppOutdatedScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  'AppOutdated'
>;

export const AppOutdatedScreenContainer: FC<
  AppOutdatedScreenContainerProps
> = () => {
  function onUpdate() {
    // TODO: open App Store or Google Play
  }

  return <AppOutdatedScreen onUpdate={onUpdate} />;
};
