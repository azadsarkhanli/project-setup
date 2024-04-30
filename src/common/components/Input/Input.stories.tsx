import { storiesOf } from '@storybook/react-native';
import { Center, FormControl, VStack } from 'native-base';
import React from 'react';

import { Screen } from '../Screen';

import { InputForm } from './InputForm';
import { InputFormPassword } from './InputFormPassword';
import { SearchInline } from './SearchInline';

const StoryContainer: React.FC = props => {
  const { children } = props;

  return (
    <Screen>
      <Center flex={1}>
        <VStack space={16} mt={8} width={'full'} padding={'8'}>
          {children}
        </VStack>
      </Center>
    </Screen>
  );
};

storiesOf('Input', module)
  .add('Form', () => (
    <StoryContainer>
      <FormControl>
        <FormControl.Label>Your Email</FormControl.Label>
        <InputForm isFullWidth placeholder="your@email.com" />
      </FormControl>
      <FormControl isInvalid>
        <FormControl.Label>Your Email</FormControl.Label>
        <InputForm isFullWidth placeholder="your@email.com" />
        <FormControl.ErrorMessage>Error Message</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isDisabled>
        <FormControl.Label>Your Email</FormControl.Label>
        <InputForm isFullWidth placeholder="your@email.com" />
      </FormControl>
    </StoryContainer>
  ))
  .add('Password', () => (
    <StoryContainer>
      <FormControl>
        <FormControl.Label>Your Password</FormControl.Label>
        <InputFormPassword isFullWidth placeholder="password" />
      </FormControl>
      <FormControl isInvalid>
        <FormControl.Label>Your Password</FormControl.Label>
        <InputFormPassword isFullWidth placeholder="password" />
        <FormControl.ErrorMessage>Error Message</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isDisabled>
        <FormControl.Label>Your Password</FormControl.Label>
        <InputFormPassword isFullWidth placeholder="password" />
      </FormControl>
    </StoryContainer>
  ))
  .add('Search Inline', () => (
    <StoryContainer>
      <SearchInline placeholder="Search for books or authors" />
      <SearchInline value="This is a pre-set value" />
      <SearchInline isDisabled value="This inline search is disabled" />
    </StoryContainer>
  ));
