import { Locator } from '@gyldendaldigital/react-native-readium';
import { useCallback, useState } from 'react';
import uuid from 'react-native-uuid';
import { useStore } from 'react-redux';

import { trackReaderProgress } from '../../../common/events/trackReaderProgress';

export const useReaderTracking = (id: string) => {
  const [readerSessionId] = useState<string>(uuid.v4() as string);
  const store = useStore();

  const trackLocationChange = useCallback(
    (locator: Locator) => {
      trackReaderProgress({
        store,
        locator,
        readerSessionId,
        contentId: id,
      });
    },
    [id, store, readerSessionId],
  );

  return { trackLocationChange };
};
