import { highlightAsString, isEmptyHighlight } from '../highlight';

describe('isEmptyHighlight', () => {
  it('should determine if highlight is empty', () => {
    expect(isEmptyHighlight(undefined)).toBeTruthy();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(isEmptyHighlight({} as any)).toBeTruthy();

    expect(isEmptyHighlight([])).toBeTruthy();
    expect(isEmptyHighlight([[], []])).toBeTruthy();

    expect(isEmptyHighlight('')).toBeTruthy();
  });

  it('should determine if highlight has a correct value', () => {
    expect(isEmptyHighlight('this is a valid value')).toBeFalsy();

    expect(
      isEmptyHighlight([
        { value: 'this is a valid value', isHighlighted: true },
      ]),
    ).toBeFalsy();

    expect(
      isEmptyHighlight([
        [{ value: 'this is a valid value', isHighlighted: true }],
      ]),
    ).toBeFalsy();
  });
});

describe('highlightAsString', () => {
  it('should not throw on unexpected values', () => {
    expect(highlightAsString('')).toEqual('');
    expect(highlightAsString(undefined)).toBeUndefined();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(highlightAsString({} as any)).toBeUndefined();

    expect(highlightAsString([])).toBeUndefined();
    expect(highlightAsString([[]])).toBeUndefined();
  });

  it('should map to a proper value', () => {
    expect(
      highlightAsString([{ value: 'value', isHighlighted: true }]),
    ).toEqual('value');

    expect(
      highlightAsString([{ value: 'value', isHighlighted: false }]),
    ).toEqual('value');

    expect(
      highlightAsString([
        { value: 'first ', isHighlighted: false },
        { value: 'second', isHighlighted: true },
      ]),
    ).toEqual('first second');

    expect(
      highlightAsString(
        [
          [{ value: 'first', isHighlighted: true }],
          [{ value: 'second', isHighlighted: false }],
        ],
        ' | ',
      ),
    ).toEqual('first | second');
  });
});
