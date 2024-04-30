import { AnyAction } from 'redux';

import reducer, { setEbookFile, removeEbookFile, initialState } from '../files';

const mockState1 = {
  ebooks: {
    '1': '/file/1',
  },
};
const mockState2 = {
  ebooks: {
    '1': '/file/1',
    '2': '/file/other/2',
  },
};

describe('files reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      ebooks: {},
    });
  });

  it('handle adding files', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, setEbookFile({ id: '1', path: '/file/1' })),
    ).toEqual(mockState1);
  });

  it('handle adding more files', () => {
    expect(
      reducer(mockState1, setEbookFile({ id: '2', path: '/file/other/2' })),
    ).toEqual(mockState2);
  });

  it('handle removing files', () => {
    expect(reducer(mockState2, removeEbookFile({ id: '2' }))).toEqual(
      mockState1,
    );
  });
});
