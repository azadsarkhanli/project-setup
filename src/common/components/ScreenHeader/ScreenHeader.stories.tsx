import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Box, IconButton, VStack } from 'native-base';
import React from 'react';

import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  ShareOutlineIcon,
} from '../icons';
import { Screen } from '../Screen';

import { ScreenHeader } from './ScreenHeader';

storiesOf('ScreenHeader', module).add('Default', () => (
  <Screen>
    <VStack space={2}>
      <ScreenHeader onGoBack={action('onGoBack')} />
      <ScreenHeader leftLogo />
      <ScreenHeader centerLogo />
      <ScreenHeader onGoBack={action('onGoBack')} centerLogo />
      <ScreenHeader
        rightContent={
          <IconButton
            colorScheme="primary"
            variant="unstyled"
            icon={<ChevronDownIcon size="md" color="primary.600" />}
            onPress={action('down')}
          />
        }
        title="Edit user info"
      />
      <ScreenHeader title="Edit user info" />
      <ScreenHeader onGoBack={action('onGoBack')} title="Edit user info" />
      <ScreenHeader
        onGoBack={action('onGoBack')}
        title="Edit user info"
        subtitle="Subtitle"
      />
      <ScreenHeader
        onGoBack={action('onGoBack')}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Aenean ullamcorper arcu non metus lacinia elementum."
        rightContent={
          <IconButton
            colorScheme="primary"
            variant="unstyled"
            icon={<EllipsisHorizontalIcon size="md" color="primary.600" />}
            onPress={action('menu')}
          />
        }
      />
      <ScreenHeader
        onGoBack={action('onGoBack')}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        subtitle="Aenean ullamcorper arcu non metus lacinia elementum."
        rightContent={
          <Box flexDirection="row">
            <IconButton
              colorScheme="primary"
              variant="unstyled"
              icon={<ShareOutlineIcon size="md" color="primary.600" />}
              onPress={action('share')}
            />
            <IconButton
              colorScheme="primary"
              variant="unstyled"
              icon={<EllipsisHorizontalIcon size="md" color="primary.600" />}
              onPress={action('menu')}
            />
          </Box>
        }
        sideContentWidth={70}
      />
      <ScreenHeader
        onGoBack={action('onGoBack')}
        title={text('title', 'Title from knob')}
        subtitle={text('subtitle', 'Subtitle from knob')}
      />
    </VStack>
  </Screen>
));
