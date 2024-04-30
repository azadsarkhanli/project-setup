import {
  LoadEvent,
  Locator,
  ReadiumEpubReaderHandle,
} from '@gyldendaldigital/react-native-readium';
import { Manifest } from '@gyldendaldigital/react-native-readium/lib/typescript/types/publication';
import { useCallback, useRef, useState } from 'react';

export const useReadiumState = () => {
  const readerRef = useRef<ReadiumEpubReaderHandle | null>(null);
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [positions, setPositions] = useState<Locator[] | null>(null);

  const goToLocator = useCallback(
    (locator: Locator) => {
      readerRef?.current?.goTo(locator);
    },
    [readerRef],
  );

  const onLoad = useCallback((event: LoadEvent) => {
    setManifest(event.manifest);
    setPositions(event.positions);
  }, []);

  return {
    readerRef,
    manifest,
    positions,
    goToLocator,
    onLoad,
  };
};
