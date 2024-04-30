import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { track } from '../../../common/events';
import {
  HomeStackParamList,
  RootStackParamList,
} from '../../../common/navigation';
import { useTranslatedString } from '../../../common/utils/translatedString';
import { usePlayPublication } from '../../player/usePlayPublication';
import { PublicationFormat } from '../graphql';
import { useCmsScreen } from '../graphql/queries';
import { mapPublicationFragment } from '../graphql/utils';
import { allBookshelfByOpenTime } from '../reducer/bookshelf';
import {
  ResolvedCmsScreenItems,
  ResolvedBookshelfScreenItem,
  BaseBook,
} from '../types';

import { useBookshelf } from './useBookshelf';

export const useResolvedCmsScreen = (slug: string) => {
  const {
    data: screenData,
    loading,
    refetch: refetchScreen,
    error,
  } = useCmsScreen({
    variables: {
      slug,
    },
  });
  const navigation =
    useNavigation<NavigationProp<RootStackParamList & HomeStackParamList>>();
  const ts = useTranslatedString();
  const bookshelfItems = useSelector(allBookshelfByOpenTime);
  const {
    query: { refetch: refetchBookshelf },
  } = useBookshelf();
  const playPublication = usePlayPublication();

  const refetch = async function () {
    await Promise.all([refetchScreen(), refetchBookshelf()]);
  };

  const items: ResolvedCmsScreenItems = useMemo(() => {
    if (!screenData) {
      return [];
    }

    const onBookshelfItemPress =
      (screenItemId: string) => (publication: BaseBook) => {
        switch (publication.format) {
          case PublicationFormat.Ebook:
            navigation.navigate('Reader', { bookId: publication.id });
            break;
          case PublicationFormat.Audiobook:
            playPublication(publication.id);
            break;
        }
        track([
          'book_clicked',
          {
            book_id: publication.id,
            parent_id: screenItemId,
            tracked_from: 'homepage_my_books',
          },
        ]);
      };

    const onListItemPress = (screenItemId: string) => (product: BaseBook) => {
      navigation.navigate('Product', { id: product.id });
      track([
        'book_clicked',
        {
          book_id: product.id,
          parent_id: screenItemId,
          tracked_from: 'homepage_sanity',
        },
      ]);
    };

    return screenData.screenItems
      .map(item => {
        switch (item.__typename) {
          case 'BookshelfScreenItem':
            if (!bookshelfItems?.length) {
              return null as unknown as ResolvedBookshelfScreenItem; // removed by filter
            }
            return {
              ...item,
              title: ts(item.title),
              description: ts(item.description),
              items: bookshelfItems.slice(0, 10).map(mapPublicationFragment),
              onBookPress: onBookshelfItemPress(item.id),
            };
          case 'ScreenItemList':
            return {
              ...item,
              title: ts(item.title),
              description: ts(item.description),
              items: item.items,
              onBookPress: onListItemPress(item.id),
            };
          default:
            return item;
        }
      })
      .filter(Boolean);
  }, [bookshelfItems, navigation, playPublication, screenData, ts]);

  return {
    error,
    refetch,
    loading,
    items,
  };
};
