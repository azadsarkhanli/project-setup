import {
  LocationChangeEvent,
  Locator as ReadiumLocator,
} from '@gyldendaldigital/react-native-readium';

import { GraphQlNode } from '../../common/types';

import {
  PublicationFragment,
  CmsScreenItemFragment,
  ProductMetadataFragment,
} from './graphql';

export type PublicationState = {
  progress?: number;
  isNew?: boolean;
  isDownloaded?: boolean;
  isOwned?: boolean;
  downloadUri?: string;
  currentLocator?: Locator;
  furthestLocator?: Locator;
  bookmarks?: Bookmark[];
};

export type ResolvedPublication = BaseBook & PublicationState;

export type BaseBook = Pick<
  PublicationFragment,
  'id' | 'title' | 'thumbnailUri'
> &
  Pick<ProductMetadataFragment, 'authorsFormatted' | 'format'>;

export type Bookmark = {
  id: string;
  createdAt: number;
  locator: Locator;
  content?: string;
};

export type Locator = ReadiumLocator & Pick<LocationChangeEvent, 'snippet'>;

export type ResolvedBookshelfScreenItem = Omit<
  Extract<CmsScreenItemFragment, GraphQlNode<'BookshelfScreenItem'>>,
  'title' | 'description'
> & {
  title: string;
  description: string;
  items: BaseBook[];
  onBookPress?: (book: BaseBook) => void;
};

export type ResolvedScreenItemList = Omit<
  Extract<CmsScreenItemFragment, GraphQlNode<'ScreenItemList'>>,
  'title' | 'description' | 'items'
> & {
  title: string;
  description: string;
  items: BaseBook[];
  onBookPress?: (book: BaseBook) => void;
};

export type ResolvedCmsScreenItems = Array<
  | ResolvedBookshelfScreenItem
  | Extract<CmsScreenItemFragment, GraphQlNode<'GenresScreenItem'>>
  | ResolvedScreenItemList
>;
