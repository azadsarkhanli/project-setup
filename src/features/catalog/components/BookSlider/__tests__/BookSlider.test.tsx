import renderer from '@arkapp/test-utils/test-renderer';
import { Text } from 'native-base';
import React from 'react';

import { books } from '../../../../../utils/mocks/book';
import { MockContainerProvider } from '../../../context/ContainerContext/MockContainerProvider';
import { BookSlider } from '../BookSlider';

const onPress = jest.fn();

test('renders empty list properly', async () => {
  const tree = renderer
    .create(
      <MockContainerProvider>
        <BookSlider items={[]} />
      </MockContainerProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders empty container properly', async () => {
  const tree = renderer
    .create(
      <MockContainerProvider>
        <BookSlider
          items={[]}
          emptyContainer={<Text>No data available</Text>}
        />
      </MockContainerProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders items properly', async () => {
  const tree = renderer
    .create(
      <MockContainerProvider>
        <BookSlider
          items={books}
          isStatusSectionVisible={true}
          onPress={onPress}
          emptyContainer={<Text>No data available</Text>}
        />
      </MockContainerProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
