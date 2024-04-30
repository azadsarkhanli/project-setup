import { Store } from '@reduxjs/toolkit';
import { Track } from 'react-native-track-player';

import { RootState } from '../../../app/context/ReduxProvider/store';
import { trackReaderProgress } from '../../../common/events/trackReaderProgress';
import { positionToLocator } from '../../../reader/common/utils/utils';
import { setCurrentLocation } from '../../catalog/reducer/knownPublications';

import { PlaybackServiceListener } from './playbackservice';
import { getSessionId } from './player';

export class ReduxServiceListener implements PlaybackServiceListener {
  public constructor(private store: Store<RootState>) {}

  public onPlaybackProgressUpdated(
    track: Track,
    position: number,
    duration: number,
  ) {
    const id: string = track.publicationId;
    if (!id) {
      return;
    }
    const locator = positionToLocator(position, duration);
    trackReaderProgress({
      store: this.store,
      locator,
      readerSessionId: getSessionId(),
      contentId: id,
    });
    this.store.dispatch(
      setCurrentLocation({
        id,
        locator,
      }),
    );
  }
}
