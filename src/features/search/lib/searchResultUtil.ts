import { ArkHit } from '../model/SearchResult';

import { AttributeValues } from './searchConstants';

export type DigitalContentType = 'ebook' | 'audiobook';

export const getContentTypes = (hit: ArkHit | undefined) => {
  if (!hit || !hit.format) {
    return [];
  }

  const types: DigitalContentType[] = [];
  if (isEbook(hit)) {
    types.push('ebook');
  }

  if (isAudioBook(hit)) {
    types.push('audiobook');
  }

  return types;
};

export const isEbook = (hit: ArkHit | undefined) => {
  return hit?.format === AttributeValues.format.ebook;
};

export const isAudioBook = (hit: ArkHit | undefined) => {
  return hit?.format === AttributeValues.format.audiobook;
};

export const isBokmaal = (hit: ArkHit | undefined): boolean => {
  return hit?.language === AttributeValues.language.bookmaal;
};

export const getFormattedLanguage = (
  hit: ArkHit | undefined,
): string | undefined => {
  return hit?.languageFormatted;
};

export const getPrice = (hit: ArkHit | undefined): number | undefined => {
  return hit?.priceValue;
};

// TODO: Move logic for image urls to backend
export const productImageUrl = (hit: ArkHit) => {
  if (hit?.code === undefined) {
    // The endpoint returns a cover image with the text 'Bilde ikke tilgjengelig' (Image not available)
    // if the provided code does not match a product
    return 'https://dj4fsg3e1je59.cloudfront.net/no-image-fallback';
  }

  return `https://dj4fsg3e1je59.cloudfront.net/${hit?.code ?? ''}/img/0-M`;
};
