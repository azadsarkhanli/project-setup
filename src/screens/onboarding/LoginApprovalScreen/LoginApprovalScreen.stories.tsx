import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { openInbox } from 'react-native-email-link';

import { LoginApprovalScreen } from './LoginApprovalScreen';

storiesOf('LoginApprovalScreen', module).add('Default', () => (
  <LoginApprovalScreen
    onGoBack={action('onGoBack')}
    onOpenEmail={openInbox}
    onResend={action('onResend')}
  />
));
