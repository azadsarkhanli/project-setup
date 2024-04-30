import { AnyAction } from 'redux';
import { PURGE } from 'redux-persist';

import { publicationFragment } from '../../../utils/mocks/book';

import { reducer, State } from './reducer';

const initialState = {
  auth: {
    codeVerifiers: {},
    isLoading: true,
    userId: null,
  },
  bookshelf: {
    byId: {},
    defaultOrder: [],
    lastOpenTime: {},
  },
  files: {
    ebooks: {},
  },
  knownPublications: {},
  newUser: {
    hasSeenWelcomeScreen: false,
    formData: {
      firstName: '',
      lastName: '',
      street: '',
      streetNumber: '' || 0,
      zipCode: '',
      city: '',
      marketingAgreement: false,
    },
    prefillUserInfo: null,
  },
  readerSettings: {
    autoNightMode: false,
    colorTheme: 'default',
    fontFamily: 'Original',
    fontSize: 100,
    lineHeight: 1.5,
  },
  searchPageContent: {
    hasFocus: false,
    isActive: false,
    isKeyboardVisible: false,
  },
  searchQuery: {
    query: '',
  },
};

const mockState = {
  auth: {
    codeVerifiers: {
      'test-123': 'code-123',
    },
    isLoading: false,
    userId: 'test-123',
  },
  bookshelf: {
    byId: {
      '123456': publicationFragment,
    },
    defaultOrder: ['123456'],
    lastOpenTime: { '123456': 1663092401 },
  },
  files: {
    ebooks: {
      '123456': {
        title: 'Test',
      },
    },
  },
  knownPublications: { '123456': {} },
  newUser: {
    formData: {
      email: 'test@ark.no',
    },
    prefillUserInfo: {
      email: 'test@ark.no',
    },
  },
  readerSettings: {
    autoNightMode: false,
    colorTheme: 'default',
    fontFamily: 'Original',
    fontSize: 120,
    lineHeight: 1,
  },
  searchPageContent: {
    hasFocus: true,
    isActive: false,
    isKeyboardVisible: false,
  },
  searchQuery: {
    query: 'test',
  },
} as unknown as State;

describe('Root reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it('should handle empty action', () => {
    expect(reducer(mockState, {} as AnyAction)).toEqual(mockState);
  });

  it('should handle PURGE action', () => {
    expect(reducer(mockState, { type: PURGE })).toEqual(initialState);
  });
});
