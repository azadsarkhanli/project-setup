import { AttributeValues } from '../searchConstants';
import { DigitalContentType, getContentTypes } from '../searchResultUtil';

describe('getContentTypes', () => {
  it('should not throw on nullish types', () => {
    expect(getContentTypes(undefined)).toHaveLength(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getContentTypes(null as any)).toHaveLength(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getContentTypes({} as any)).toHaveLength(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(getContentTypes({ sapCategoryIds: null } as any)).toHaveLength(0);
  });

  it('should determine content type', () => {
    const ebook: DigitalContentType = 'ebook';
    const audioBook: DigitalContentType = 'audiobook';

    expect(getContentTypes({ format: 'BOOKS' })).toHaveLength(0);
    expect(
      getContentTypes({
        format: AttributeValues.format.ebook,
      }),
    ).toContain(ebook);

    expect(
      getContentTypes({
        format: AttributeValues.format.audiobook,
      }),
    ).toContain(audioBook);
  });
});
