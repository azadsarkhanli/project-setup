import { Box, VStack, Text, IBoxProps, HStack } from 'native-base';
import React, { VFC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../../common/components/Button/Button';
import { TableCellLink } from '../../../../common/components/TableCell/TableCellLink';

// https://www.algolia.com/doc/guides/solutions/ecommerce/search/autocomplete/suggested-searches/
// https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/how-to/creating-a-query-suggestions-index/js/
export const POPULAR_SEARCHES = [
  'Chuck Klostermann',
  'Harry Bernstein',
  'Dune',
];

export const RECENT_SEARCHES = [
  'Chuck Klostermann',
  'patti smith',
  'Jit Dethmer',
];

export const TEST_SEARCHES = [
  'How to write about music',
  'Les Trois Mousquetaires',
  'Fantastic stories presents',
  'Souvenirs de la duchesse de Dino publies',
];

type SearchQueryListProps = IBoxProps & {
  title: string;
  queries: string[];
  onPress: (text: string) => void;
  onClear?: () => void;
};

export const SearchQueryList: VFC<SearchQueryListProps> = ({
  title,
  queries,
  onPress,
  onClear,
  ...props
}) => {
  const { t } = useTranslation('search');

  if (!queries.length) {
    return null;
  }

  return (
    <Box {...props}>
      <HStack
        justifyContent={'space-between'}
        ml={onClear && 2}
        alignContent={'center'}
      >
        <Text pb={4} variant="sm" fontWeight={500} color="muted.500">
          {title}
        </Text>
        {onClear && (
          <Button
            onPress={onClear}
            size={'md'}
            variant={'ghost'}
            pr={2}
            pl={4}
            pb={4}
            pt={0}
            _text={{ color: 'lightText', fontSize: 'md' }}
          >
            {t('searchQueryList.clear')}
          </Button>
        )}
      </HStack>
      <VStack space={1}>
        {queries.map(query => {
          return (
            <TableCellLink
              key={query}
              onPress={() => onPress(query)}
              size="sm"
              title={query}
            />
          );
        })}
      </VStack>
    </Box>
  );
};
