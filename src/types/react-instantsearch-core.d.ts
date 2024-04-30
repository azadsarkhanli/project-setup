import 'react-instantsearch-core';

declare module 'react-instantsearch-core' {
  export type HitHighlightArray = Array<{
    value: string;
    isHighlighted: boolean;
  }>;

  export type HitHighlightValues = HitHighlightArray[] | HitHighlightArray;
}
