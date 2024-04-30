import { renderHook } from '@testing-library/react-hooks';
import React, { FC } from 'react';

import { flattenToC, manifest } from '../../../../../utils/mocks/readium';
import {
  ReaderContext,
  ReaderContextValue,
} from '../../../context/ReaderContext';
import { useTableOfContents } from '../useTableOfContents';

const contextValue: ReaderContextValue = {
  manifest,
} as ReaderContextValue;

const Wrapper =
  (value: ReaderContextValue): FC =>
  ({ children }) =>
    <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;

describe('useTableOfContents', () => {
  it('should calculate list', () => {
    const { result } = renderHook(() => useTableOfContents(), {
      wrapper: Wrapper(contextValue),
    });
    expect(result.current).toStrictEqual(flattenToC);
  });
});
