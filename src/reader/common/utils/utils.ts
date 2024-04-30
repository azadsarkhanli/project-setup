import { inRange } from 'lodash';

import { Bookmark, Locator } from '../../../features/catalog/types';

export const findBookmarkByLocator = (
  bookmarks: Bookmark[] | undefined,
  currentLocator: Locator | undefined,
  range?: number,
) => {
  const currentProgression = currentLocator?.locations?.totalProgression;
  if (currentProgression === undefined || !bookmarks) {
    return undefined;
  }

  return bookmarks.find(({ locator: { locations } }) =>
    range
      ? inRange(
          currentProgression,
          (locations?.totalProgression || 0) - range / 2,
          (locations?.totalProgression || 0) + range / 2,
        )
      : locations?.totalProgression === currentProgression,
  );
};

export const positionToLocator = (
  position: number,
  duration: number,
): Locator => ({
  href: '', // TODO: Get href from TOC?
  type: 'audio/mp3',
  locations: {
    fragments: [`t=${position.toFixed(2)}`, `d=${duration.toFixed(2)}`],
    position: 1,
    progression: duration === 0 ? 0 : position / duration,
    totalProgression: duration === 0 ? 0 : position / duration,
  },
});

export const locatorToPosition = (locator: Locator): number => {
  if (!locator.locations?.fragments) {
    return 0;
  }
  const fragment = (locator.locations?.fragments).find(f => f.startsWith('t='));
  if (!fragment) {
    return 0;
  }
  return parseFloat(fragment.substring(2));
};
