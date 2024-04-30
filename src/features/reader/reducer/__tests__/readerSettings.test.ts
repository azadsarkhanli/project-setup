import { AnyAction } from 'redux';

import reducer, {
  setReaderColorTheme,
  setReaderAutoNightMode,
  initialState,
  setReaderFontFamily,
  setReaderFontSize,
  setReaderLineHeight,
} from '../readerSettings';

describe('readerSettings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      autoNightMode: false,
      colorTheme: 'default',
      fontFamily: 'Original',
      fontSize: 100,
      lineHeight: 1.5,
    });
  });

  it('handle changing colorMode', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, setReaderColorTheme({ colorTheme: 'night' })),
    ).toEqual({ ...initialState, colorTheme: 'night' });
  });

  it('handle changing autoNightMode', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, setReaderAutoNightMode({ autoNightMode: true })),
    ).toEqual({ ...initialState, autoNightMode: true });
  });

  it('handle changing fontFamily', () => {
    const previousState = initialState;
    expect(
      reducer(
        previousState,
        setReaderFontFamily({ fontFamily: 'OpenDyslexic' }),
      ),
    ).toEqual({ ...initialState, fontFamily: 'OpenDyslexic' });
  });

  it('handle changing fontSize', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, setReaderFontSize({ fontSize: 200 })),
    ).toEqual({ ...initialState, fontSize: 200 });
  });

  it('handle changing lineHeight', () => {
    const previousState = initialState;
    expect(
      reducer(previousState, setReaderLineHeight({ lineHeight: 1.3 })),
    ).toEqual({ ...initialState, lineHeight: 1.3 });
  });
});
