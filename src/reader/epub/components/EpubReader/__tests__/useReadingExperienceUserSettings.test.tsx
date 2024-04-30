import { renderHook, act } from '@testing-library/react-hooks';
import React, { FC } from 'react';

import {
  ReaderContext,
  ReaderContextValue,
} from '../../../context/ReaderContext';
import { ReaderColorTheme } from '../../../types';
import { ReaderWrapper } from '../../ReaderWrapper';
import { useReadingExperienceUserSettings } from '../useReadingExperienceUserSettings';

const getWrapper: (colorTheme: ReaderColorTheme) => FC =
  colorTheme =>
  ({ children }) =>
    (
      <ReaderContext.Provider value={{ colorTheme } as ReaderContextValue}>
        <ReaderWrapper colorTheme={colorTheme}>{children}</ReaderWrapper>
      </ReaderContext.Provider>
    );

jest.useFakeTimers('legacy');

describe('useReadingExperienceUserSettings', () => {
  it('should handle sepia mode', async () => {
    const { result } = renderHook(() => useReadingExperienceUserSettings(), {
      wrapper: getWrapper('sepia'),
    });
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(result.current.appearance).toBe('readium-sepia-on');
    expect(result.current.backgroundColor).toBe('#fecea4');
    expect(result.current.textColor).toBe('#283939');
  });

  it('should handle night mode', async () => {
    const { result } = renderHook(() => useReadingExperienceUserSettings(), {
      wrapper: getWrapper('night'),
    });
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(result.current.appearance).toBe('readium-night-on');
    expect(result.current.backgroundColor).toBe('#000000');
    expect(result.current.textColor).toBe('#d2dada');
  });
});
