import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { ProfileScreen } from './ProfileScreen';

const items = [
  {
    label: 'Account Details',
    onPress: action('Account Details'),
  },
  {
    label: 'Bokskya Accounts',
    onPress: action('Bokskya Accounts'),
  },
  {
    label: 'Help',
    onPress: action('Help'),
  },
  {
    label: 'About This App',
    onPress: action('About This App'),
  },
  {
    label: 'Logout',
    onPress: action('Logout'),
  },
];

storiesOf('ProfileScreen', module).add('Default', () => (
  <ProfileScreen
    menuItems={items}
    user={{
      email: 'alexander@mail.com',
    }}
  />
));
