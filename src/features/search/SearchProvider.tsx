import { NavigationProp, useNavigation } from '@react-navigation/native';
import algoliasearch from 'algoliasearch';
import React, { createContext, FC, useContext, useMemo } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-native';

import { useAppContext } from '../../app/context/AppProvider';
import { track } from '../../common/events';
import { CombinedNavParamList } from '../../common/navigation';

import { ArkHit } from './model/SearchResult';

export interface AppContextType {
  onHitPress: (hit: ArkHit) => void;
}

export const SearchContext = createContext<AppContextType>({
  onHitPress: () => {
    /* do nothing */
  },
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider: FC = props => {
  const { children } = props;
  const { remoteConfig } = useAppContext();

  const nav = useNavigation<NavigationProp<CombinedNavParamList>>();

  const searchClient = useMemo(
    () => algoliasearch(remoteConfig.search.appId, remoteConfig.search.key),
    [remoteConfig.search],
  );

  const filter = [JSON.parse(remoteConfig.search.filter)];

  const value = useMemo(() => {
    return {
      onHitPress: (hit: ArkHit) => {
        if (hit.code) {
          nav.navigate('Product', { id: hit.code });
          track([
            'book_clicked',
            {
              book_id: hit.code,
              tracked_from: 'search',
            },
          ]);
        }
      },
    };
  }, [nav]);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={remoteConfig.search.index}
    >
      <Configure hitsPerPage={12} facetFilters={filter} />
      <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    </InstantSearch>
  );
};
