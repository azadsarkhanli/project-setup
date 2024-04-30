import React, { useCallback, VFC } from 'react';
import {
  HighlightProvided,
  Hit,
  HitHighlightValues,
} from 'react-instantsearch-core';
import { connectHighlight } from 'react-instantsearch-native';

import { AttributePaths } from '../../../lib/searchConstants';
import {
  getContentTypes,
  getFormattedLanguage,
  getPrice,
  isBokmaal,
  productImageUrl,
} from '../../../lib/searchResultUtil';
import { ArkHit } from '../../../model/SearchResult';
import { useSearchContext } from '../../../SearchProvider';

import { BookResultCard } from './BookResultCard';

interface ConnectedBookResultCardProps extends HighlightProvided<ArkHit> {
  arkHit: ArkHit;
}

const ConnectedBookResultCard: VFC<ConnectedBookResultCardProps> = ({
  arkHit,
  highlight,
}) => {
  const { onHitPress } = useSearchContext();
  const titleHighlights = highlight({
    highlightProperty: AttributePaths.highlightResult,
    attribute: AttributePaths.titleNorwegian,
    hit: arkHit as Hit<ArkHit>,
  }) as HitHighlightValues;

  const authorHighlights = highlight({
    highlightProperty: AttributePaths.highlightResult,
    attribute: AttributePaths.authorNames,
    hit: arkHit as Hit<ArkHit>,
  }) as HitHighlightValues;

  const onPress = useCallback(() => onHitPress(arkHit), [arkHit, onHitPress]);

  return (
    <BookResultCard
      title={titleHighlights}
      author={authorHighlights}
      price={getPrice(arkHit)}
      contentTypes={getContentTypes(arkHit)}
      imageUrl={productImageUrl(arkHit)}
      language={isBokmaal(arkHit) ? undefined : getFormattedLanguage(arkHit)}
      onPress={onPress}
      showPrice={false}
    />
  );
};

export default connectHighlight(ConnectedBookResultCard);
