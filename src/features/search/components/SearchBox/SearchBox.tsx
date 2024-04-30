import { Box, IBoxProps } from 'native-base';
import React, { useCallback, useEffect, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { connectSearchBox } from 'react-instantsearch-native';
import { useDispatch, useSelector } from 'react-redux';

import { SearchInline } from '../../../../common/components/Input/SearchInline';
import { track } from '../../../../common/events';
import { queryChanged, query } from '../../reducer/searchQuery';

interface SearchBoxProps extends SearchBoxProvided, IBoxProps {
  onFocusChanged?: (hasFocus: boolean) => void;
  onActiveChanged?: (isActive: boolean) => void;
  onBackClicked?: () => void;
  onClearClicked?: () => void;
}

const SearchBox: VFC<SearchBoxProps> = ({
  refine,
  onFocusChanged,
  onActiveChanged,
  onBackClicked,
  onClearClicked,
  ...boxProps
}) => {
  const { t } = useTranslation('search');
  const dispatch = useDispatch();
  const queryText = useSelector(query);

  useEffect(() => {
    refine(queryText);
  }, [queryText, refine]);

  const onBlur = useCallback(() => {
    if (queryText.length) {
      track(['text_searched', { text: queryText }]);
    }
  }, [queryText]);

  return (
    <Box {...boxProps}>
      <SearchInline
        placeholder={t('searchBox.placeholder')}
        onChangeText={value => dispatch(queryChanged({ query: value }))}
        value={queryText}
        onFocusChanged={onFocusChanged}
        onActiveChanged={onActiveChanged}
        onClearClicked={onClearClicked}
        onBackClicked={onBackClicked}
        onBlur={onBlur}
        autoFocus={false}
      />
    </Box>
  );
};

export default connectSearchBox(SearchBox);
