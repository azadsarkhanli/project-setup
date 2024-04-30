import {
  ReadiumEpubReader,
  LocationChangeEvent,
} from '@gyldendaldigital/react-native-readium';
import React, { useMemo, VFC } from 'react';
import { StyleSheet } from 'react-native';

import { useReaderContext } from '../../context/ReaderContext';

import { useReadingExperienceUserSettings } from './useReadingExperienceUserSettings';

export type EpubReaderProps = {
  onLocationChange?: (event: LocationChangeEvent) => void;
  onPress?: () => void;
};

export const EpubReader: VFC<EpubReaderProps> = ({
  onLocationChange,
  onPress,
}) => {
  const { currentLocator, onError, onLoad, path, readerRef } =
    useReaderContext();
  const userSettings = useReadingExperienceUserSettings();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialLocator = useMemo(() => currentLocator, []);

  return (
    <ReadiumEpubReader
      ref={readerRef}
      path={path}
      userSettings={userSettings}
      style={styles.reader}
      onLoad={onLoad}
      onLocationChange={onLocationChange}
      onPress={onPress}
      onError={onError}
      initialLocator={initialLocator}
    />
  );
};

// not using native-base Factory as it can lead to recreation of component instance on re-render
const styles = StyleSheet.create({
  reader: {
    flex: 1,
    width: '100%',
  },
});
