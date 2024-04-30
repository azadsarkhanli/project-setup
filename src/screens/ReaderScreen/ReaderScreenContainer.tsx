import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { LoadingScreen } from '../../common/components/LoadingScreen';
import { RootStackParamList } from '../../common/navigation';
import { bookshelfPublication } from '../../features/catalog/reducer/bookshelf';

import { ReaderScreen } from './ReaderScreen';

export const ReaderScreenContainer: FC<
  NativeStackScreenProps<RootStackParamList, 'Reader'>
> = ({ navigation, route }) => {
  const { bookId } = route.params;
  const book = useSelector(bookshelfPublication(bookId));

  useEffect(() => {
    if (!book) {
      navigation.pop();
    }
  }, [book, navigation]);

  if (!book) {
    return <LoadingScreen />;
  }

  return <ReaderScreen book={book} />;
};
