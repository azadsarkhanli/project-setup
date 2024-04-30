import { Screen } from '../navigation';

export type AppLogs = {
  userId: string | null;
  appInstanceId: string | null;
  deviceType: string;
  systemName: string;
  systemVersion: string;
  sessionId: string;
  action: string;
  screen: Screen | null;
  timestamp: string;
  online: boolean;
  details: Record<string, unknown> | null;
  consents: {
    statistics: boolean;
    personalisation: boolean;
    improvement: boolean;
  } | null;
};

type AppEnterScreenEvent = ['appEnterScreen', { prevScreenId: string | null }];

type AppLeaveScreenEvent = ['appLeaveScreen'];

type LoginStartedEvent = ['login_started'];

type LoginErrorEvent = ['login_error', { type: string }];

type LoginCompletedEvent = ['login_completed'];

type LoginExistingBooksEvent = [
  'login_existing_books',
  { numberOfBooks: number },
];

type RegistrationCompletedEvent = ['registration_completed'];

type ArkVennSignupEvent = ['ark_venn_signup'];

type LibraryContentLoadedEvent = [
  'library_content_loaded',
  {
    total_books: number;
    ebooks: number;
    audiobooks: number;
    book_ids?: string;
  },
];

type BookClickedEvent = [
  'book_clicked',
  {
    book_id: string;
    tracked_from: string;
    parent_id?: string;
  },
];

type MenuItemClicked = [
  'menu_item_clicked',
  {
    label: string;
  },
];

type ReaderContentLoadedEvent = [
  'reader_content_loaded',
  {
    book_id: string;
    book_author: string;
    book_title: string;
    ebook_progress: number;
  },
];

type ReaderProgressEvent = [
  'reader_progress',
  { book_id: string; reader_session_id: string; progress?: string },
];

type BookmarkAddedEvent = ['bookmark_added', { book_id: string; from: string }];

type BookmarkRemovedEvent = [
  'bookmark_removed',
  { book_id: string; from: string },
];

type ReaderSettingsOpened = ['reader_settings_opened'];

type ReaderTableOfContentsOpened = ['reader_table_of_contents_opened'];

type ReaderBookmarksOpened = ['reader_bookmarks_opened'];

type ReaderThemeEdited = ['reader_theme_edited', { theme: string }];

type ReaderFontEdited = ['reader_font_edited', { font: string }];

type ReaderFontSizeEdited = ['reader_font_size_edited', { fontSize: number }];

type ReaderLineHeightEdited = [
  'reader_line_height_edited',
  { lineHeight: number },
];

type ReaderBrightnessEdited = ['reader_brightness_edited'];

type BookActionsEvent = [
  'book_actions',
  {
    book_id: string;
    download?: boolean;
    delete?: boolean;
    tracked_from?: string;
  },
];

type PlayerContentLoadedEvent = [
  'player_content_loaded',
  {
    book_id: string;
    book_author: string;
    book_title: string;
    audiobook_progress?: number;
  },
];

type PlayerBookmarksOpened = ['player_bookmarks_opened'];

type NarratorSpeedChosenEvent = ['narratorspeed_chosen', { rate: number }];

type AddSleeptimerEvent = ['add_sleeptimer', { duration: number }];

type MiniplayerEvent = [
  'miniplayer',
  { play_pause_clicked?: boolean; goback15_clicked?: boolean },
];

type TextSearchedEvent = ['text_searched', { text: string }];

type FeedbackClickedEvent = ['feedback_clicked'];

type LogoutClickedEvent = ['logout_clicked'];

type ProductPageContentLoaded = [
  'product_page_content_loaded',
  {
    book_id: string;
    book_title: string;
    book_author: string;
    book_owned: boolean;
    book_owned_format?: string;
  },
];

type ExternalLinkEvent = [
  'external_link',
  { book_id: string; book_title: string; book_author: string },
];

//temproary events for logout tracking

type LogoutStarted = ['logout_started'];
type LogoutFinished = ['logout_finished'];
type TokenUpdate = [
  'token_update',
  { is_expired: boolean; is_force_refresh: boolean },
];
type NoRefreshTokenValue = ['no_refresh_token_value'];
type RemoveToken = ['remove_token'];
type AuthClientLogoutStarted = ['auth_client_logout_started'];
type ValidateTokenError = ['validate_token_error'];
type ClientErrorOnRefresh = ['client_error_on_refresh'];
type ClientErrorOnRevoke = ['client_error_on_revoke'];
type ServerErrorOnRefresh = ['server_error_on_refresh'];
type ServerErrorOnRevoke = ['server_error_on_revoke'];

export type Event =
  | ArkVennSignupEvent
  | AppEnterScreenEvent
  | AppLeaveScreenEvent
  | BookmarkAddedEvent
  | BookmarkRemovedEvent
  | LibraryContentLoadedEvent
  | MenuItemClicked
  | ReaderBookmarksOpened
  | ReaderTableOfContentsOpened
  | ReaderSettingsOpened
  | ReaderThemeEdited
  | ReaderFontEdited
  | ReaderFontSizeEdited
  | ReaderLineHeightEdited
  | ReaderBrightnessEdited
  | BookClickedEvent
  | BookActionsEvent
  | ReaderContentLoadedEvent
  | ReaderProgressEvent
  | LoginErrorEvent
  | LoginExistingBooksEvent
  | LoginStartedEvent
  | LoginCompletedEvent
  | RegistrationCompletedEvent
  | PlayerContentLoadedEvent
  | PlayerBookmarksOpened
  | MiniplayerEvent
  | NarratorSpeedChosenEvent
  | AddSleeptimerEvent
  | TextSearchedEvent
  | FeedbackClickedEvent
  | LogoutClickedEvent
  | ProductPageContentLoaded
  | ExternalLinkEvent
  | LogoutStarted
  | LogoutFinished
  | TokenUpdate
  | NoRefreshTokenValue
  | RemoveToken
  | AuthClientLogoutStarted
  | ValidateTokenError
  | ClientErrorOnRefresh
  | ClientErrorOnRevoke
  | ServerErrorOnRefresh
  | ServerErrorOnRevoke;
