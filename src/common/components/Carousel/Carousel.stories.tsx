import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Stack, Text } from 'native-base';
import React, { FC } from 'react';

import { Carousel } from './Carousel';

const Slide: FC<{
  index: number;
}> = ({ index }) => {
  return (
    <Stack p="4" h="full" justifyContent="center">
      <Text variant="h3" textAlign="center">
        This is slide {index}!
      </Text>
      <Text variant="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Stack>
  );
};

storiesOf('Carousel', module).add('Default', () => (
  <Carousel>
    {[...Array(number('slides', 5))].map((item, index) => {
      return <Slide index={index} key={`slide-${index}`} />;
    })}
  </Carousel>
));
