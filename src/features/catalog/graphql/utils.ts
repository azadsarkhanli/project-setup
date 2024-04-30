import { PublicationFragment, PublicationFormat } from '../graphql';
import { BaseBook } from '../types';

export const mapPublicationFragment = (
  publication: PublicationFragment,
): BaseBook => {
  return {
    ...publication,
    format:
      publication.__typename === 'EbookPublication'
        ? PublicationFormat.Ebook
        : PublicationFormat.Audiobook,
  };
};
