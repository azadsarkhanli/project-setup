// Generated using quicktype.io
// This type is incomplete as it is generated from a search results json file.

export interface ArkHit {
  literatureType?: string[] | null;
  catalogVersion?: string;
  subject?: null;
  manufacturerName?: null;
  relatedProducts?: string;
  categoriesLevel0?: string[];
  categoriesLevel1?: string[];
  discount?: number;
  sapCategoryIds?: string[];
  language?: string;
  subjectPlace?: string[] | null;
  categoriesLevel2?: string[];
  categoriesLevel3?: string[];
  schoolGrade?: null;
  categoriesLevel4?: string[];
  categoriesLevel5?: string[];
  contributorName?: string[];
  approved?: boolean;
  subjectTime?: string[] | null;
  baseProductCode?: string;
  season?: null;
  publishedYear?: string;
  productSeries?: null;
  webStatus?: string;
  brand?: null;
  drm?: null;
  toyVolume?: null;
  toyRecycled?: null;
  assorted?: null;
  brandName?: null;
  productMaterial?: null;
  workTitle?: null;
  format?: string;
  puzzleWidth?: null;
  weight?: string;
  uniqueSellingPoint?: null | string;
  ageGroup?: null;
  hasAssembly?: null;
  size?: string;
  publisherName?: string;
  name?: HitDescription;
  guid?: string;
  publisher?: string;
  featuredPerson?: string[] | null;
  penYear?: null;
  compatibility?: null;
  titleSub?: null | string;
  childrensBook?: unknown;
  code?: string;
  gender?: null;
  translator?: null;
  description?: HitDescription;
  languageFormatted?: string;
  fixedPrice?: string;
  seriesTitle?: null;
  mammutNumber?: string;
  contributor?: string[];
  ean?: string;
  isExcerpt?: null;
  subjectWord?: null | string;
  isDigitalResource?: boolean;
  ageTo?: string;
  summary?: unknown;
  editor?: null;
  arkFriendPriceValue?: number;
  puzzleLength?: null;
  priceValue?: number;
  formatFormatted?: string;
  coAuthor?: string[] | null;
  url?: string;
  seriesNumber?: null;
  arkFriendDiscount?: number;
  originalTitle?: null;
  authorNames?: string[];
  ageFrom?: string;
  dewey?: string[];
  categoryNameMain?: string;
  publishedDate?: string;
  pk?: string;
  fileFormat?: null;
  sannsynScore?: number;
  collectionTags?: string[] | null;
  color?: null;
  genre?: null | string;
  objectID?: string;
  snippetResult?: unknown;
  _highlightResult?: HighlightResult;
  rankingInfo?: unknown;
}

export interface HitDescription {
  en?: string;
  no?: string;
}

export interface HighlightResult {
  categoriesLevel0?: Code[];
  categoriesLevel1?: Code[];
  categoriesLevel2?: Code[];
  categoriesLevel3?: Code[];
  name?: HighlightResultDescription;
  guid?: Code;
  code?: Code;
  description?: HighlightResultDescription;
  formatFormatted?: Code;
  authorNames?: Code[];
  collectionTags?: Code[];
}

export interface HighlightResultDescription {
  no?: Code;
}

export interface Code {
  value?: string;
  matchLevel?: string;
  matchedWords?: string[];
}
