import { get } from 'lodash';

import { ArkHit } from '../../model/SearchResult';
import { AttributePaths } from '../searchConstants';

describe('attribute paths', () => {
  it('should match search result type', () => {
    const arkHit: ArkHit = {
      authorNames: ['Author Name'],
      name: { no: 'Norwegian Title', en: 'English Title' },
      _highlightResult: { code: { value: '123' } },
    };

    expect(get(arkHit, AttributePaths.authorNames)).toBe(arkHit.authorNames);
    expect(get(arkHit, AttributePaths.titleEnglish)).toBe(arkHit?.name?.en);
    expect(get(arkHit, AttributePaths.titleNorwegian)).toBe(arkHit?.name?.no);

    expect(get(arkHit, AttributePaths.highlightResult).code.value).toEqual(
      '123',
    );
  });
});
