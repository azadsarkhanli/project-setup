import { Locator } from '@gyldendaldigital/react-native-readium';
import { AnyAction } from 'redux';

import { locator, bookmark } from '../../../../utils/mocks/book';
import reducer, {
  setCurrentLocation,
  addBookmark,
  removeBookmark,
  initialState,
  KnownPublicationsState,
} from '../knownPublications';

const locator1: Locator = { ...locator };
const locator2: Locator = {
  ...locator1,
  href: '/text/chapter02.xhtml',
  title: 'Tistelen 2',
  locations: {
    position: 14,
    progression: 0,
    totalProgression: 0.02,
  },
};
const locator3: Locator = {
  ...locator2,
  locations: {
    position: 1,
    progression: 0,
    totalProgression: 0.01,
  },
};

const bookmark1 = { ...bookmark };
const bookmark2 = {
  ...bookmark,
  id: 'yy-yyyy-yy',
  locator: locator2,
  content: 'Title',
};
const bookmark3 = {
  ...bookmark,
  id: 'zz-zz-zz',
  locator: locator3,
};

const mockState1 = {
  '1': {
    currentLocator: locator1,
    furthestLocator: locator1,
  },
};

const mockState2 = {
  '1': {
    currentLocator: locator2,
    furthestLocator: locator1,
  },
};

const mockState3 = {
  '1': {
    currentLocator: locator1,
    furthestLocator: locator1,
  },
  '2': {
    currentLocator: locator2,
    furthestLocator: locator2,
  },
};
const mockState4: KnownPublicationsState = {
  '1': {
    currentLocator: locator1,
    furthestLocator: locator1,
  },
  '3': {
    bookmarks: [bookmark1],
    pastBookmarks: [],
  },
};
const mockState5: KnownPublicationsState = {
  ...mockState4,
  '3': {
    bookmarks: [bookmark2, bookmark1],
    pastBookmarks: [bookmark1],
  },
};
const mockState6: KnownPublicationsState = {
  ...mockState4,
  '3': {
    bookmarks: [bookmark1],
    pastBookmarks: [bookmark2, bookmark1],
  },
};
const mockState7: KnownPublicationsState = {
  ...mockState5,
  '3': {
    bookmarks: [bookmark3, bookmark2, bookmark1],
    pastBookmarks: [bookmark2, bookmark1],
  },
};

describe('known publications reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({});
  });

  it('should handle setting current location', () => {
    const previousState = initialState;
    expect(
      reducer(
        previousState,
        setCurrentLocation({ id: '1', locator: locator1 }),
      ),
    ).toEqual(mockState1);
  });

  it('should not update furthest locator if new one is not higher', () => {
    expect(
      reducer(mockState1, setCurrentLocation({ id: '1', locator: locator2 })),
    ).toEqual(mockState2);
  });

  it('should handle multiple known publications', () => {
    expect(
      reducer(mockState1, setCurrentLocation({ id: '2', locator: locator2 })),
    ).toEqual(mockState3);
  });

  it('should handle adding a bookmark', () => {
    expect(
      reducer(
        mockState1,
        addBookmark({
          id: '3',
          bookmark: bookmark1,
        }),
      ),
    ).toEqual(mockState4);
  });

  it('should handle adding multiple bookmarks', () => {
    expect(
      reducer(
        mockState4,
        addBookmark({
          id: '3',
          bookmark: bookmark2,
        }),
      ),
    ).toEqual(mockState5);
  });

  it('should not duplicate bookmarks', () => {
    expect(
      reducer(
        mockState5,
        addBookmark({
          id: '3',
          bookmark,
        }),
      ),
    ).toEqual(mockState5);
  });

  it('should handle removing bookmarks', () => {
    expect(
      reducer(
        mockState5,
        removeBookmark({
          bookId: '3',
          bookmarkId: bookmark2.id,
        }),
      ),
    ).toEqual(mockState6);
  });

  it('should keep bookmarks in proper order', () => {
    expect(
      reducer(
        mockState5,
        addBookmark({
          id: '3',
          bookmark: bookmark3,
        }),
      ),
    ).toEqual(mockState7);
  });
});
