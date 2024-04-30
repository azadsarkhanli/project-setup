import { LocationChangeEvent } from '@gyldendaldigital/react-native-readium';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  publicationCurrentLocator,
  publicationFurthestLocator,
  setCurrentLocation,
} from '../../catalog/reducer/knownPublications';

import { useReaderTracking } from './useReaderTracking';

export const useBookLocators = (id: string) => {
  const dispatch = useDispatch();
  const { trackLocationChange } = useReaderTracking(id);

  const currentLocator = useSelector(publicationCurrentLocator(id));
  const furthestLocator = useSelector(publicationFurthestLocator(id));

  const onLocationChange = useCallback(
    (event: LocationChangeEvent) => {
      if (!event?.locator) {
        return;
      }
      const locator = {
        ...event?.locator,
        snippet: event?.snippet,
      };

      if (locator) {
        trackLocationChange(locator);
        dispatch(
          setCurrentLocation({
            id,
            locator,
          }),
        );
      }
    },
    [dispatch, id, trackLocationChange],
  );

  return {
    currentLocator,
    furthestLocator,
    onLocationChange,
    progress: currentLocator?.locations?.totalProgression ?? 0,
  };
};
