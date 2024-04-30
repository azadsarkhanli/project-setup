import useKeyboard from '@rnhooks/keyboard';
import { VStack, ScrollView, View, Text, Box } from 'native-base';
import React, { useCallback, useLayoutEffect, useEffect, VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutAnimation } from 'react-native';
import { useIsConnected } from 'react-native-offline';
import { useDispatch, useSelector } from 'react-redux';

import { IllustrationPersonSearching } from '../../../../common/components/illustrations';
import { Screen } from '../../../../common/components/Screen';
import { ScreenHeader } from '../../../../common/components/ScreenHeader';
import { track } from '../../../../common/events';
import { showNetworkErrorToast } from '../../../../common/useErrorToast';
import InfiniteHits from '../../components/InfiniteHits/InfiniteHits';
import SearchBox from '../../components/SearchBox/SearchBox';
import { SearchQueryList } from '../../components/SearchQueryList/SearchQueryList';
import {
  focus,
  keyboard,
  active,
  pageContentType,
} from '../../reducer/searchPageContent';
import { queryChanged } from '../../reducer/searchQuery';
import { SearchProvider } from '../../SearchProvider';

export const SearchContainer: VFC = () => {
  const { t } = useTranslation('search');

  const dispatch = useDispatch();
  const content = useSelector(pageContentType);
  const isConnected = useIsConnected();

  const [visible, dismiss] = useKeyboard();

  useEffect(() => {
    dispatch(keyboard({ isVisible: visible }));
  }, [dispatch, visible]);

  const handleOnFocus = useCallback(
    (hasFocus: boolean) => dispatch(focus({ hasFocus: hasFocus })),
    [dispatch],
  );

  const handleOnActive = useCallback(
    (isActive: boolean) => dispatch(active({ isActive: isActive })),
    [dispatch],
  );

  const handleOnBackClicked = useCallback(() => {
    dispatch(queryChanged({ query: '' }));
    dismiss();
  }, [dispatch, dismiss]);

  const handleOnClearClicked = useCallback(() => {
    dispatch(queryChanged({ query: '' }));
  }, [dispatch]);

  const handleOnQueryTextClicked = useCallback(
    (text: string) => {
      dispatch(queryChanged({ query: text }));
      track(['text_searched', { text: text }]);
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isConnected) {
      showNetworkErrorToast();
    }
  }, [isConnected]);

  useLayoutEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [content]);

  return (
    <Screen
      withBottomMenu
      withoutScroll
      header={<ScreenHeader title={t('search')} />}
    >
      <VStack flex={1}>
        <SearchProvider>
          <SearchBox
            px={4}
            mt={2}
            onFocusChanged={handleOnFocus}
            onActiveChanged={handleOnActive}
            onBackClicked={handleOnBackClicked}
            onClearClicked={handleOnClearClicked}
          />

          {(content === 'open' || content === 'focus') && (
            <FocusPageContent onQueryTextClicked={handleOnQueryTextClicked} />
          )}

          {(content === 'active' || content === 'result') && (
            <ResultsPageContent />
          )}
        </SearchProvider>
      </VStack>
    </Screen>
  );
};

const SCROLL_VIEW_STYLE = {
  flex: 1,
  p: 4,
};

const FocusPageContent = ({
  onQueryTextClicked,
}: {
  onQueryTextClicked: (text: string) => void;
}) => {
  const { t } = useTranslation('search');

  const recentSearches: string[] = []; // TODO: https://gyldendaldigital.atlassian.net/browse/AA-71

  return (
    <ScrollView _contentContainerStyle={SCROLL_VIEW_STYLE}>
      {recentSearches.length > 0 ? (
        <SearchQueryList
          title={t('searchScreen.recentlySearched')}
          queries={recentSearches}
          onPress={text => onQueryTextClicked(text)}
        />
      ) : (
        <Box alignItems="center">
          <IllustrationPersonSearching height="248px" width="248px" />
          <Text variant="h3" textAlign="center" mt="4">
            {t('searchScreen.callToAction')}
          </Text>
        </Box>
      )}
    </ScrollView>
  );
};

// TODO: use native-base styles and _contentContainerStyle when updating to 3.3
const INFINITE_HITS_STYLE = {
  paddingTop: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 24,
};

const ResultsPageContent = () => {
  const { t } = useTranslation('search');

  return (
    <View flex={1}>
      <Text m={4} mb={2} variant="sm" fontWeight={500} color="muted.500">
        {t('searchScreen.results')}
      </Text>
      <InfiniteHits style={INFINITE_HITS_STYLE} />
    </View>
  );
};
