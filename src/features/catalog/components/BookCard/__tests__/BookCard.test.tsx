import renderer from '@arkapp/test-utils/test-renderer';
import { render } from '@arkapp/test-utils/testing-library';
import React from 'react';
import { Image } from 'react-native';

import { book } from '../../../../../utils/mocks/book';
import { BookCard } from '../BookCard';

const onPress = jest.fn();
const onDownload = jest.fn();
const onRemoveFromDevice = jest.fn();

const getSizeMock = jest.spyOn(Image, 'getSize');
getSizeMock.mockImplementation(() => {
  /* do nothing */
});

test('renders correctly with minimal set of params', async () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
        }}
        onPress={onPress}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders meta info correctly', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
        }}
        onPress={onPress}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders "new" badge correctly', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
          isNew: true,
        }}
        onPress={onPress}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders long title correctly', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Girl with the Dragon Tattoo, The Millennium Trilogy',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
        }}
        onPress={onPress}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders owned book correctly', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          isOwned: true,
          downloadUri: 'https://picsum.photos/200/300.jpg',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
          progress: 0.22,
        }}
        onPress={onPress}
        onDownload={onDownload}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders progress correctly', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          isOwned: true,
          isDownloaded: true,
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
          progress: 0.22,
        }}
        onPress={onPress}
        onRemoveFromDevice={onRemoveFromDevice}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders book type icons correctly if no type is available', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
          isDownloaded: false,
        }}
        onPress={onPress}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders book type icons correctly if all types are available', () => {
  const tree = renderer
    .create(
      <BookCard
        book={{
          ...book,
          id: 'BOOK01',
          title: 'Angels and Demons',
          thumbnailUri: 'https://picsum.photos/200/300.jpg',
          isDownloaded: false,
        }}
        onPress={onPress}
        isStatusSectionVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders title and meta info container correctly', async () => {
  const { getByTestId } = render(
    <BookCard
      book={{
        ...book,
        id: 'BOOK01',
        title: 'Harry Potter and the Deathly Hallows',
        thumbnailUri: 'https://picsum.photos/200/300.jpg',
      }}
      isStatusSectionVisible={true}
      onPress={onPress}
    />,
  );

  const bookTitle = getByTestId('bookTitle');
  const bookStatusSectionContainer = getByTestId('bookStatusSectionContainer');
  expect(bookStatusSectionContainer).toBeTruthy();
  expect(bookTitle.props.children).toBe(book.title);
});
