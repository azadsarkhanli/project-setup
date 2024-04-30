import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { Box } from 'native-base';
import React from 'react';

import { Screen } from '../../../../common/components/Screen';

import { BookmarkMenu } from './BookmarkMenu';

storiesOf('BookmarkMenu', module).add('Default', () => (
  <Screen>
    <Box alignItems="flex-end" p={4} flex={1}>
      <BookmarkMenu
        onNavigate={action('onNavigate')}
        onDelete={action('onDelete')}
      />
    </Box>
  </Screen>
));
