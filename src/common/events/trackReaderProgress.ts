import { Locator } from '@gyldendaldigital/react-native-readium';
import { Store } from '@reduxjs/toolkit';

import { RootState } from '../../app/context/ReduxProvider/store';
import { publicationFurthestProgression } from '../../features/catalog/reducer/knownPublications';

import { READING_PROGRESS_STEP, track } from '.';

const calculateProgresStep = (progression?: number) =>
  Math.floor((progression || 0) / READING_PROGRESS_STEP) *
  READING_PROGRESS_STEP;

type LocationChange = {
  store: Store<RootState>;
  locator: Locator;
  readerSessionId: string;
  contentId: string;
};

export const trackReaderProgress = ({
  store,
  locator,
  readerSessionId,
  contentId,
}: LocationChange) => {
  if (!locator) {
    return;
  }
  const currentProgresStep = calculateProgresStep(
    locator.locations?.totalProgression,
  );
  const previousFurthestProgresion = publicationFurthestProgression(contentId)(
    store.getState(),
  );
  if (calculateProgresStep(previousFurthestProgresion) !== currentProgresStep) {
    track([
      'reader_progress',
      {
        reader_session_id: readerSessionId,
        book_id: contentId,
        progress: currentProgresStep.toFixed(2),
      },
    ]);
  }
};
