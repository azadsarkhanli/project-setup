import React, { FC, useCallback, useEffect, useState } from 'react';
import { DevSettings } from 'react-native';

import { Storybook } from '../../storybook';

import App from './App';

export const Root: FC = () => {
  const [isStorybookActive, setIsStorybookActive] = useState(false);
  const toggleStorybook = useCallback(
    () => setIsStorybookActive(active => !active),
    [],
  );

  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Toggle Storybook', () => {
        toggleStorybook();
      });
    }
  }, [toggleStorybook]);

  return isStorybookActive ? <Storybook /> : <App />;
};

export default Root;
