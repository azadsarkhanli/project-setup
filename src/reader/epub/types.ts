export type ColorMode = 'light' | 'dark';

export type ReaderColorTheme = 'default' | 'sepia' | 'night';

export type Publication = {
  id: string;
  title: string;
  authors: {
    id: string;
    name: string;
  }[];
  authorsFormatted: string;
};
