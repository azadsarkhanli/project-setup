import { renderHook } from '@testing-library/react-hooks';
import { render, RenderOptions } from '@testing-library/react-native';
import React from 'react';

import { AllTheProviders } from '.';

type TRenderHook = typeof renderHook;

const customRender = (
  ui: React.ReactElement<React.ReactNode>,
  options?: RenderOptions,
) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook: TRenderHook = (callback, options) =>
  renderHook(callback, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render, customRenderHook as renderHok };
