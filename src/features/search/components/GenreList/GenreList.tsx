import { Box, HStack, Text, IBoxProps } from 'native-base';
import React, { VFC, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutAnimation } from 'react-native';

import { Button } from '../../../../common/components/Button/Button';
import { useToggleShowList } from '../../hooks/useToggleShowList';
import { GenreCard } from '../card/GenreCard/GenreCard';

// Your genres might come from salesforce? Or maybe the bookself, or readinglist?
export const YOUR_GENRES = ['Art', 'Comedy', 'Crime', 'Fantasy'];

// Search for all genres: https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/
export const ALL_GENRES = [
  'Art',
  'Comedy',
  'Crime',
  'Fantasy',
  'Good Night Stories',
  'Dystopic',
  'Religious',
  'Art',
  'Comedy',
  'Crime',
  'Fantasy',
];

type GenreListProps = IBoxProps & {
  title: string;
  genres: string[];
  maxNumberOfItemsToShow?: number;
};

export const GenreList: VFC<GenreListProps> = ({
  title,
  genres,
  maxNumberOfItemsToShow,
  ...props
}) => {
  const { t } = useTranslation('search');

  const { itemsToShow, toggleShowAll, shownState, isAllItemsAlwaysVisible } =
    useToggleShowList(genres, maxNumberOfItemsToShow);

  useLayoutEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [shownState, isAllItemsAlwaysVisible]);

  return (
    <Box {...props}>
      <Text pb={4} fontSize={'md'} fontWeight={500} color="lightText">
        {title}
      </Text>
      <HStack space={2} mb={-2} flexWrap={'wrap'}>
        {itemsToShow.map((genre, index) => (
          <GenreCard mb={2} key={index} text={genre} />
        ))}
      </HStack>
      {!isAllItemsAlwaysVisible && (
        <Button
          alignSelf={'flex-start'}
          size="sm"
          onPress={toggleShowAll}
          variant={'ghost'}
          mt={2}
          px={0}
          _text={{
            color: 'secondary.100',
            fontSize: 'sm',
            _dark: { color: 'secondary.100', fontSize: 'sm' },
          }}
          _pressed={{ bgColor: 'transparent' }}
        >
          {shownState === 'allIsShown'
            ? t('genreList.showLess')
            : t('genreList.showMore')}
        </Button>
      )}
    </Box>
  );
};
