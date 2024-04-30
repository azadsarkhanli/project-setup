import renderer from '@arkapp/test-utils/test-renderer';
import React from 'react';

import { WelcomeScreen } from '..';

function onPress() {
  console.log('onPress');
}

test('renders Welcome screen correctly', () => {
  const tree = renderer
    .create(<WelcomeScreen onLogin={onPress} onRegister={onPress} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
