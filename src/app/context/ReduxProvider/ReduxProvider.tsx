import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';

type Props = {
  fallback?: ReactNode;
};

export const ReduxProvider: FC<Props> = ({ children, fallback }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={fallback} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
