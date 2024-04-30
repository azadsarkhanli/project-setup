import {
  PublicationFormat,
  PublicationFragment,
} from '../../features/catalog/graphql';
import {
  Bookmark,
  Locator,
  ResolvedPublication,
} from '../../features/catalog/types';

const downloadUri =
  'https://standardebooks.org/ebooks/william-shakespeare/timon-of-athens/downloads/william-shakespeare_timon-of-athens.epub';

export const book: ResolvedPublication = {
  id: '1',
  title: 'Harry Potter and the Deathly Hallows',
  authorsFormatted: 'J. K. Rowling',
  format: PublicationFormat.Ebook,
  thumbnailUri: 'https://picsum.photos/200/300.jpg',
  isDownloaded: true,
  isOwned: false,
};

export const publicationFragment: PublicationFragment = {
  __typename: 'EbookPublication',
  id: '1',
  title: 'Harry Potter and the Deathly Hallows',
  authorsFormatted: 'J. K. Rowling',
  authors: [
    {
      __typename: 'Author',
      id: 'jkr',
      name: 'J. K. Rowling',
    },
  ],
  downloadUri,
  format: PublicationFormat.Ebook,
  thumbnailUri: 'https://picsum.photos/200/300.jpg',
};

export const locator: Locator = {
  href: '/text/chapter01.xhtml',
  locations: {
    position: 16,
    progression: 0,
    totalProgression: 0.03759398496240601,
  },
  title: 'Tistelen',
  type: 'application/xhtml+xml',
  snippet:
    'Felix er søtten år og begynner på ny skole. Der treffer han Nicolai og blir hodestups forelsket.',
};

export const bookmark: Bookmark = {
  id: 'xx-xxx-xx',
  createdAt: new Date().getTime(),
  locator,
};

export const books: Array<ResolvedPublication> = [
  {
    id: 'BOOK001',
    title: 'Harry Potter and the Deathly Hallows',
    authorsFormatted: 'J. K. Rowling',
    format: PublicationFormat.Ebook,
    thumbnailUri: 'https://picsum.photos/200/300.jpg',
  },
  {
    id: 'BOOK002',
    title: 'Fifty Shades of Grey',
    authorsFormatted: 'E. L. James',
    format: PublicationFormat.Ebook,
    thumbnailUri: 'https://picsum.photos/200/300.jpg',
    progress: 0.5,
    isNew: true,
    isDownloaded: true,
  },
  {
    id: 'BOOK003',
    title: 'Girl with the Dragon Tattoo, The Millennium Trilogy',
    authorsFormatted: 'Stieg Larsson',
    format: PublicationFormat.Ebook,
    thumbnailUri: 'https://picsum.photos/200/300.jpg',
    progress: 1,
    isDownloaded: true,
  },
  {
    id: 'BOOK004',
    title: 'Deception Point',
    authorsFormatted: 'Dan Brown',
    format: PublicationFormat.Ebook,
    thumbnailUri: 'https://picsum.photos/200/300.jpg',
    progress: 0.1,
    isNew: true,
  },
];
