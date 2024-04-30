import {
  HitHighlightValues,
  HitHighlightArray,
} from 'react-instantsearch-core';

export const stringAsHighlight = (
  value: string | undefined,
): HitHighlightValues | undefined => {
  if (!value) {
    return undefined;
  }

  return [{ value: value, isHighlighted: false }];
};

export const highlightAsString = (
  highlightValues: HitHighlightValues | string | undefined,
  separator?: string,
): string | undefined => {
  if (!highlightValues) {
    return highlightValues;
  }

  if (typeof highlightValues === 'string') {
    return highlightValues;
  }

  if (isEmptyHighlight(highlightValues)) {
    return undefined;
  }

  if (isNestedHighlight(highlightValues)) {
    return highlightValues
      .map(arr => highlightArrayAsString(arr as HitHighlightArray))
      .join(separator);
  }

  return highlightArrayAsString(highlightValues as HitHighlightArray);
};

export const isEmptyHighlight = (
  highlightValues: HitHighlightValues | string | undefined,
): boolean => {
  if (!highlightValues) {
    return true;
  }

  if (typeof highlightValues === 'string') {
    return highlightValues.length === 0;
  }

  if (!Array.isArray(highlightValues) || highlightValues.length === 0) {
    return true;
  }

  if (isNestedHighlight(highlightValues)) {
    return !highlightValues.some(
      values => !isEmptyHighlight(values as HitHighlightArray),
    );
  }

  return false;
};

export const isNestedHighlight = (
  highlightValues: HitHighlightValues | string | undefined,
): boolean => {
  return Array.isArray(highlightValues?.[0]);
};

const highlightArrayAsString = (highlightArray: HitHighlightArray) => {
  return highlightArray.map(pair => pair.value).join('');
};
