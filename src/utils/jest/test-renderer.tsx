import React from 'react';
import { ReactElement } from 'react';
import renderer, { TestRendererOptions } from 'react-test-renderer';

import { AllTheProviders } from '.';

const _create = renderer.create;
renderer.create = (children: ReactElement, options?: TestRendererOptions) => {
  return _create(<AllTheProviders>{children}</AllTheProviders>, options);
};

export default renderer;
