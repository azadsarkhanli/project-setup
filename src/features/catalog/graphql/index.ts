/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** User account activation status. */
export enum ActivationStatus {
  /** User identified by identity service, user service and product service. */
  Active = 'ACTIVE',
  /** User identified by identity service. */
  Identified = 'IDENTIFIED',
}

export type AudiobookPublication = Publication & {
  __typename: 'AudiobookPublication';
  authors: Array<Author>;
  authorsFormatted: Scalars['String'];
  downloadUri: Scalars['String'];
  format: PublicationFormat;
  id: Scalars['ID'];
  isbn: Scalars['String'];
  productBundle?: Maybe<ProductBundle>;
  streamingUri: Scalars['String'];
  thumbnailUri?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Author = {
  __typename: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Change request and try again */
export type BadRequestError = Error & {
  __typename: 'BadRequestError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type BookshelfScreenItem = {
  __typename: 'BookshelfScreenItem';
  description: TranslatedString;
  id: Scalars['ID'];
  title: TranslatedString;
};

export type CheckLoginSessionInput = {
  codeVerifier: Scalars['String'];
  deviceId: Scalars['String'];
  id: Scalars['String'];
};

export type CheckPasswordlessConnectionResponse =
  | BadRequestError
  | NotFoundError
  | PasswordlessConnection
  | ServerError
  | TokenWithUser;

export type ClientConfiguration = {
  __typename: 'ClientConfiguration';
  events: ClientEventsConfiguration;
  feedback: FeedbackConfiguration;
  minAppVersion: Scalars['String'];
  product: ClientProductConfiguration;
  search: ClientProductSearchConfiguration;
};

export type ClientConfigurationResponse = ClientConfiguration | ServerError;

export type ClientEventsConfiguration = {
  __typename: 'ClientEventsConfiguration';
  host: Scalars['String'];
  sendEvents: Scalars['Boolean'];
  token: Scalars['String'];
};

export type ClientProductConfiguration = {
  __typename: 'ClientProductConfiguration';
  callbackUrl: Scalars['String'];
};

export type ClientProductSearchConfiguration = {
  __typename: 'ClientProductSearchConfiguration';
  appId: Scalars['String'];
  filter: Scalars['String'];
  index: Scalars['String'];
  key: Scalars['String'];
};

export type CmsScreen = {
  __typename: 'CmsScreen';
  id: Scalars['String'];
  screenItems: Array<CmsScreenItem>;
  slug: Scalars['String'];
};

export type CmsScreenItem =
  | BookshelfScreenItem
  | GenresScreenItem
  | ScreenItemList;

export type CmsScreenResponse = BadRequestError | CmsScreen | ServerError;

export type CreateLoginSessionInput = {
  codeChallenge: Scalars['String'];
  deviceId: Scalars['String'];
  deviceName: Scalars['String'];
  email: Scalars['String'];
};

export type CreatePasswordlessConnectionResponse =
  | BadRequestError
  | PasswordlessConnection
  | ServerError
  | UserNotFoundError;

export type EbookPublication = Publication & {
  __typename: 'EbookPublication';
  authors: Array<Author>;
  authorsFormatted: Scalars['String'];
  downloadUri: Scalars['String'];
  format: PublicationFormat;
  id: Scalars['ID'];
  isbn: Scalars['String'];
  productBundle?: Maybe<ProductBundle>;
  thumbnailUri?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** Email verification code has expired */
export type EmailVerificationCodeExpiredError = Error & {
  __typename: 'EmailVerificationCodeExpiredError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

/** Wrong email verification code */
export type EmailVerificationCodeInvalidError = Error & {
  __typename: 'EmailVerificationCodeInvalidError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

/** Max limit of code verification tries has been reached */
export type EmailVerificationCodeLimitError = Error & {
  __typename: 'EmailVerificationCodeLimitError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Error = {
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type FeedbackConfiguration = {
  __typename: 'FeedbackConfiguration';
  url?: Maybe<Scalars['String']>;
};

/** Insufficient access rights for authenticated user */
export type ForbiddenError = Error & {
  __typename: 'ForbiddenError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type GenreItem = {
  __typename: 'GenreItem';
  key: Scalars['String'];
  name: TranslatedString;
};

export type GenresScreenItem = {
  __typename: 'GenresScreenItem';
  description: TranslatedString;
  genres: Array<GenreItem>;
  id: Scalars['ID'];
  title: TranslatedString;
};

export type InvalidFormFieldError = {
  __typename: 'InvalidFormFieldError';
  error: Scalars['String'];
  field: Scalars['String'];
  type: Scalars['String'];
};

/** External validation for form field value failed */
export type InvalidFormFieldsExternalError = Error & {
  __typename: 'InvalidFormFieldsExternalError';
  details?: Maybe<Scalars['String']>;
  formFields: Array<InvalidFormFieldError>;
  message: Scalars['String'];
};

/** Internal validation for form field value failed */
export type InvalidFormFieldsInternalError = Error & {
  __typename: 'InvalidFormFieldsInternalError';
  details?: Maybe<Scalars['String']>;
  formFields: Array<InvalidFormFieldError>;
  message: Scalars['String'];
};

export type LoginInput = {
  code: Scalars['String'];
  codeVerifier: Scalars['String'];
  id: Scalars['String'];
};

export type LoginResponse =
  | BadRequestError
  | NotFoundError
  | ServerError
  | TokenWithUser;

/** User account activation status. */
export enum LoginSessionStatus {
  /** User identified by identity service, user service and product service. */
  Active = 'ACTIVE',
  Created = 'CREATED',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  /** Email with link sent. Awaiting for activation */
  Pending = 'PENDING',
}

export type Mutation = {
  __typename: 'Mutation';
  checkPasswordlessConnection: CheckPasswordlessConnectionResponse;
  createPasswordlessConnection: CreatePasswordlessConnectionResponse;
  login: LoginResponse;
  registerNewUser: RegisterNewUserResponse;
  /** @deprecated createPasswordlessConnection replaces token flow */
  token: TokenResponse;
  triggerArkEmailConfirmation: TriggerEmailConfirmationResponse;
  triggerEmailConfirmation: TriggerEmailConfirmationResponse;
  verifyEmailCode: VerifyEmailCodeResponse;
};

export type MutationCheckPasswordlessConnectionArgs = {
  input: CheckLoginSessionInput;
};

export type MutationCreatePasswordlessConnectionArgs = {
  input: CreateLoginSessionInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterNewUserArgs = {
  input: RegisterNewUserDto;
};

export type MutationTokenArgs = {
  code: Scalars['String'];
  codeVerifier?: Maybe<Scalars['String']>;
};

export type MutationTriggerArkEmailConfirmationArgs = {
  email: Scalars['String'];
};

export type MutationTriggerEmailConfirmationArgs = {
  email: Scalars['String'];
};

export type MutationVerifyEmailCodeArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

/** Requested resource not found */
export type NotFoundError = Error & {
  __typename: 'NotFoundError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type NotVerifiedEmailError = Error & {
  __typename: 'NotVerifiedEmailError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type PasswordlessConnection = {
  __typename: 'PasswordlessConnection';
  expiresAt?: Maybe<Scalars['DateTime']>;
  expiresIn?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  status: LoginSessionStatus;
};

export type Product = {
  __typename: 'Product';
  id: Scalars['ID'];
  metadata: ProductMetadata;
  purchase?: Maybe<PurchaseMetadata>;
};

export type ProductBundle = {
  __typename: 'ProductBundle';
  authors: Array<Author>;
  authorsFormatted: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isbn: Scalars['String'];
  language: Scalars['String'];
  products: Array<Product>;
  purchase?: Maybe<PurchaseMetadata>;
  readerVoice?: Maybe<Scalars['String']>;
  releaseDate: Scalars['String'];
  thumbnailUri: Scalars['String'];
  title: Scalars['String'];
  uniqueSellingPoint?: Maybe<Scalars['String']>;
};

/** Requested Product for ProductBundle not found. */
export type ProductBundleNotFoundError = Error & {
  __typename: 'ProductBundleNotFoundError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type ProductBundleResponse =
  | BadRequestError
  | ForbiddenError
  | ProductBundle
  | ProductBundleNotFoundError
  | ServerError
  | UnauthorizedError;

export type ProductMetadata = {
  __typename: 'ProductMetadata';
  authors: Array<Author>;
  authorsFormatted: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  format: PublicationFormat;
  genres?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  isbn: Scalars['String'];
  language: Scalars['String'];
  pages?: Maybe<Scalars['String']>;
  playTime?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  readerVoice?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  seriesNumber?: Maybe<Scalars['String']>;
  seriesTitle?: Maybe<Scalars['String']>;
  thumbnailUri: Scalars['String'];
  title: Scalars['String'];
  uniqueSellingPoint?: Maybe<Scalars['String']>;
};

export type Publication = {
  authors: Array<Author>;
  authorsFormatted: Scalars['String'];
  format: PublicationFormat;
  id: Scalars['ID'];
  isbn: Scalars['String'];
  productBundle?: Maybe<ProductBundle>;
  thumbnailUri?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** Publication format. */
export enum PublicationFormat {
  /** Audiobook format. */
  Audiobook = 'AUDIOBOOK',
  /** E-book format. */
  Ebook = 'EBOOK',
}

export type PublicationList = {
  __typename: 'PublicationList';
  items: Array<Publication>;
};

export type PublicationListResponse =
  | BadRequestError
  | ForbiddenError
  | PublicationList
  | ServerError
  | UnauthorizedError;

export type PurchaseMetadata = {
  __typename: 'PurchaseMetadata';
  currencyIso: Scalars['String'];
  price: Scalars['Float'];
  purchaseUri?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  bookshelf: PublicationListResponse;
  cmsScreen: CmsScreenResponse;
  configuration: ClientConfigurationResponse;
  productBundle: ProductBundleResponse;
  user: UserResponse;
};

export type QueryBookshelfArgs = {
  fullRefresh?: Maybe<Scalars['Boolean']>;
};

export type QueryCmsScreenArgs = {
  slug: Scalars['String'];
};

export type QueryProductBundleArgs = {
  id: Scalars['String'];
};

export type QueryUserArgs = {
  fullRefresh?: Maybe<Scalars['Boolean']>;
};

export type RegisterNewUserDto = {
  birthdate?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  marketingAgreement: Scalars['Boolean'];
  password: Scalars['String'];
  phone: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'] | Scalars['Int'];
  zipCode: Scalars['String'];
};

export type RegisterNewUserResponse =
  | BadRequestError
  | ForbiddenError
  | InvalidFormFieldsExternalError
  | InvalidFormFieldsInternalError
  | ServerError
  | TokenWithUser
  | UnauthorizedError;

export type ScreenItemList = {
  __typename: 'ScreenItemList';
  description: TranslatedString;
  id: Scalars['ID'];
  items: Array<ProductMetadata>;
  title: TranslatedString;
};

/** Internal error that can't be fixed from client side request */
export type ServerError = Error & {
  __typename: 'ServerError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Token = {
  __typename: 'Token';
  accessToken: Scalars['String'];
  expiresAt: Scalars['Int'];
  idToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type TokenResponse =
  | BadRequestError
  | NotVerifiedEmailError
  | ServerError
  | TokenWithUser
  | UserNotFoundError;

export type TokenWithUser = {
  __typename: 'TokenWithUser';
  token: Token;
  user: User;
};

export type TranslatedString = {
  __typename: 'TranslatedString';
  en: Scalars['String'];
  no: Scalars['String'];
};

export type TriggerEmailConfirmationResponse =
  | BadRequestError
  | ForbiddenError
  | ServerError
  | TriggerEmailConfirmationStatus
  | UnauthorizedError;

export type TriggerEmailConfirmationStatus = {
  __typename: 'TriggerEmailConfirmationStatus';
  /** Status of sending confirmation email */
  success: Scalars['Boolean'];
};

/** User not authenticated, missing token or invalid token */
export type UnauthorizedError = Error & {
  __typename: 'UnauthorizedError';
  details?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type User = {
  __typename: 'User';
  id: Scalars['ID'];
  status: ActivationStatus;
  userInfo?: Maybe<UserInfo>;
};

export type UserConsents = {
  __typename: 'UserConsents';
  improvement: Scalars['Boolean'];
  personalisation: Scalars['Boolean'];
  statistics: Scalars['Boolean'];
};

export type UserInfo = {
  __typename: 'UserInfo';
  address: UserInfoAddress;
  birthdate?: Maybe<Scalars['String']>;
  consents: UserConsents;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type UserInfoAddress = {
  __typename: 'UserInfoAddress';
  city: Scalars['String'];
  street: Scalars['String'];
  streetNumber: Scalars['String'] | Scalars['Int'];
  zipCode: Scalars['String'];
};

/** User not found in external user service provider */
export type UserNotFoundError = Error & {
  __typename: 'UserNotFoundError';
  details?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  message: Scalars['String'];
};

export type UserResponse =
  | BadRequestError
  | ForbiddenError
  | ServerError
  | UnauthorizedError
  | User
  | UserNotFoundError;

export type VerifyEmailCodeResponse =
  | BadRequestError
  | EmailVerificationCodeExpiredError
  | EmailVerificationCodeInvalidError
  | EmailVerificationCodeLimitError
  | ForbiddenError
  | ServerError
  | UnauthorizedError
  | VerifyEmailCodeStatus;

export type VerifyEmailCodeStatus = {
  __typename: 'VerifyEmailCodeStatus';
  success: Scalars['Boolean'];
};

type Error_BadRequestError_Fragment = {
  __typename: 'BadRequestError';
  message: string;
  details?: string | null | undefined;
};

type Error_EmailVerificationCodeExpiredError_Fragment = {
  __typename: 'EmailVerificationCodeExpiredError';
  message: string;
  details?: string | null | undefined;
};

type Error_EmailVerificationCodeInvalidError_Fragment = {
  __typename: 'EmailVerificationCodeInvalidError';
  message: string;
  details?: string | null | undefined;
};

type Error_EmailVerificationCodeLimitError_Fragment = {
  __typename: 'EmailVerificationCodeLimitError';
  message: string;
  details?: string | null | undefined;
};

type Error_ForbiddenError_Fragment = {
  __typename: 'ForbiddenError';
  message: string;
  details?: string | null | undefined;
};

type Error_InvalidFormFieldsExternalError_Fragment = {
  __typename: 'InvalidFormFieldsExternalError';
  message: string;
  details?: string | null | undefined;
};

type Error_InvalidFormFieldsInternalError_Fragment = {
  __typename: 'InvalidFormFieldsInternalError';
  message: string;
  details?: string | null | undefined;
};

type Error_NotFoundError_Fragment = {
  __typename: 'NotFoundError';
  message: string;
  details?: string | null | undefined;
};

type Error_NotVerifiedEmailError_Fragment = {
  __typename: 'NotVerifiedEmailError';
  message: string;
  details?: string | null | undefined;
};

type Error_ProductBundleNotFoundError_Fragment = {
  __typename: 'ProductBundleNotFoundError';
  message: string;
  details?: string | null | undefined;
};

type Error_ServerError_Fragment = {
  __typename: 'ServerError';
  message: string;
  details?: string | null | undefined;
};

type Error_UnauthorizedError_Fragment = {
  __typename: 'UnauthorizedError';
  message: string;
  details?: string | null | undefined;
};

type Error_UserNotFoundError_Fragment = {
  __typename: 'UserNotFoundError';
  message: string;
  details?: string | null | undefined;
};

export type ErrorFragment =
  | Error_BadRequestError_Fragment
  | Error_EmailVerificationCodeExpiredError_Fragment
  | Error_EmailVerificationCodeInvalidError_Fragment
  | Error_EmailVerificationCodeLimitError_Fragment
  | Error_ForbiddenError_Fragment
  | Error_InvalidFormFieldsExternalError_Fragment
  | Error_InvalidFormFieldsInternalError_Fragment
  | Error_NotFoundError_Fragment
  | Error_NotVerifiedEmailError_Fragment
  | Error_ProductBundleNotFoundError_Fragment
  | Error_ServerError_Fragment
  | Error_UnauthorizedError_Fragment
  | Error_UserNotFoundError_Fragment;

export type UserFragment = {
  __typename: 'User';
  id: string;
  status: ActivationStatus;
  userInfo?:
    | {
        __typename: 'UserInfo';
        email: string;
        birthdate?: string | null | undefined;
        name: string;
        firstName: string;
        lastName: string;
        phone?: string | null | undefined;
        address: {
          __typename: 'UserInfoAddress';
          street: string;
          streetNumber: string | number;
          zipCode: string;
          city: string;
        };
        consents: {
          __typename: 'UserConsents';
          improvement: boolean;
          personalisation: boolean;
          statistics: boolean;
        };
      }
    | null
    | undefined;
};

export type BookshelfQueryVariables = Exact<{ [key: string]: never }>;

export type BookshelfQuery = {
  __typename: 'Query';
  bookshelf:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ForbiddenError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'PublicationList';
        items: Array<
          | {
              __typename: 'AudiobookPublication';
              downloadUri: string;
              streamingUri: string;
              id: string;
              title: string;
              format: PublicationFormat;
              authorsFormatted: string;
              thumbnailUri?: string | null | undefined;
              authors: Array<{
                __typename: 'Author';
                id: string;
                name: string;
              }>;
            }
          | {
              __typename: 'EbookPublication';
              downloadUri: string;
              id: string;
              title: string;
              format: PublicationFormat;
              authorsFormatted: string;
              thumbnailUri?: string | null | undefined;
              authors: Array<{
                __typename: 'Author';
                id: string;
                name: string;
              }>;
            }
        >;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'UnauthorizedError';
        message: string;
        details?: string | null | undefined;
      };
};

export type CmsScreenQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type CmsScreenQuery = {
  __typename: 'Query';
  cmsScreen:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'CmsScreen';
        id: string;
        slug: string;
        screenItems: Array<
          | {
              __typename: 'BookshelfScreenItem';
              id: string;
              title: { __typename: 'TranslatedString'; en: string; no: string };
              description: {
                __typename: 'TranslatedString';
                en: string;
                no: string;
              };
            }
          | {
              __typename: 'GenresScreenItem';
              id: string;
              title: { __typename: 'TranslatedString'; en: string; no: string };
              description: {
                __typename: 'TranslatedString';
                en: string;
                no: string;
              };
              genres: Array<{
                __typename: 'GenreItem';
                key: string;
                name: {
                  __typename: 'TranslatedString';
                  en: string;
                  no: string;
                };
              }>;
            }
          | {
              __typename: 'ScreenItemList';
              id: string;
              title: { __typename: 'TranslatedString'; en: string; no: string };
              description: {
                __typename: 'TranslatedString';
                en: string;
                no: string;
              };
              items: Array<{
                __typename: 'ProductMetadata';
                id: string;
                isbn: string;
                authorsFormatted: string;
                format: PublicationFormat;
                thumbnailUri: string;
                title: string;
                description?: string | null | undefined;
                language: string;
                readerVoice?: string | null | undefined;
                releaseDate?: string | null | undefined;
                uniqueSellingPoint?: string | null | undefined;
                genres?: Array<string> | null | undefined;
                playTime?: string | null | undefined;
                pages?: string | null | undefined;
                publisher?: string | null | undefined;
                seriesNumber?: string | null | undefined;
                seriesTitle?: string | null | undefined;
              }>;
            }
        >;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      };
};

export type ProductBundleQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type ProductBundleQuery = {
  __typename: 'Query';
  productBundle:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ForbiddenError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ProductBundle';
        id: string;
        isbn: string;
        authorsFormatted: string;
        title: string;
        description: string;
        thumbnailUri: string;
        products: Array<{
          __typename: 'Product';
          id: string;
          metadata: {
            __typename: 'ProductMetadata';
            id: string;
            isbn: string;
            authorsFormatted: string;
            format: PublicationFormat;
            thumbnailUri: string;
            title: string;
            description?: string | null | undefined;
            language: string;
            readerVoice?: string | null | undefined;
            releaseDate?: string | null | undefined;
            uniqueSellingPoint?: string | null | undefined;
            genres?: Array<string> | null | undefined;
            playTime?: string | null | undefined;
            pages?: string | null | undefined;
            publisher?: string | null | undefined;
            seriesNumber?: string | null | undefined;
            seriesTitle?: string | null | undefined;
          };
        }>;
      }
    | {
        __typename: 'ProductBundleNotFoundError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'UnauthorizedError';
        message: string;
        details?: string | null | undefined;
      };
};

type CmsScreenItem_BookshelfScreenItem_Fragment = {
  __typename: 'BookshelfScreenItem';
  id: string;
  title: { __typename: 'TranslatedString'; en: string; no: string };
  description: { __typename: 'TranslatedString'; en: string; no: string };
};

type CmsScreenItem_GenresScreenItem_Fragment = {
  __typename: 'GenresScreenItem';
  id: string;
  title: { __typename: 'TranslatedString'; en: string; no: string };
  description: { __typename: 'TranslatedString'; en: string; no: string };
  genres: Array<{
    __typename: 'GenreItem';
    key: string;
    name: { __typename: 'TranslatedString'; en: string; no: string };
  }>;
};

type CmsScreenItem_ScreenItemList_Fragment = {
  __typename: 'ScreenItemList';
  id: string;
  title: { __typename: 'TranslatedString'; en: string; no: string };
  description: { __typename: 'TranslatedString'; en: string; no: string };
  items: Array<{
    __typename: 'ProductMetadata';
    id: string;
    isbn: string;
    authorsFormatted: string;
    format: PublicationFormat;
    thumbnailUri: string;
    title: string;
    description?: string | null | undefined;
    language: string;
    readerVoice?: string | null | undefined;
    releaseDate?: string | null | undefined;
    uniqueSellingPoint?: string | null | undefined;
    genres?: Array<string> | null | undefined;
    playTime?: string | null | undefined;
    pages?: string | null | undefined;
    publisher?: string | null | undefined;
    seriesNumber?: string | null | undefined;
    seriesTitle?: string | null | undefined;
  }>;
};

export type CmsScreenItemFragment =
  | CmsScreenItem_BookshelfScreenItem_Fragment
  | CmsScreenItem_GenresScreenItem_Fragment
  | CmsScreenItem_ScreenItemList_Fragment;

export type GenreItemFragment = {
  __typename: 'GenreItem';
  key: string;
  name: { __typename: 'TranslatedString'; en: string; no: string };
};

export type ProductMetadataFragment = {
  __typename: 'ProductMetadata';
  id: string;
  isbn: string;
  authorsFormatted: string;
  format: PublicationFormat;
  thumbnailUri: string;
  title: string;
  description?: string | null | undefined;
  language: string;
  readerVoice?: string | null | undefined;
  releaseDate?: string | null | undefined;
  uniqueSellingPoint?: string | null | undefined;
  genres?: Array<string> | null | undefined;
  playTime?: string | null | undefined;
  pages?: string | null | undefined;
  publisher?: string | null | undefined;
  seriesNumber?: string | null | undefined;
  seriesTitle?: string | null | undefined;
};

type Publication_AudiobookPublication_Fragment = {
  __typename: 'AudiobookPublication';
  downloadUri: string;
  streamingUri: string;
  id: string;
  title: string;
  format: PublicationFormat;
  authorsFormatted: string;
  thumbnailUri?: string | null | undefined;
  authors: Array<{ __typename: 'Author'; id: string; name: string }>;
};

type Publication_EbookPublication_Fragment = {
  __typename: 'EbookPublication';
  downloadUri: string;
  id: string;
  title: string;
  format: PublicationFormat;
  authorsFormatted: string;
  thumbnailUri?: string | null | undefined;
  authors: Array<{ __typename: 'Author'; id: string; name: string }>;
};

export type PublicationFragment =
  | Publication_AudiobookPublication_Fragment
  | Publication_EbookPublication_Fragment;

export type TranslatedStringFragment = {
  __typename: 'TranslatedString';
  en: string;
  no: string;
};

export const ErrorFragmentDoc = gql`
  fragment error on Error {
    message
    details
  }
`;
export const UserFragmentDoc = gql`
  fragment user on User {
    id
    userInfo {
      email
      birthdate
      name
      firstName
      lastName
      phone
      address {
        street
        streetNumber
        zipCode
        city
      }
      consents {
        improvement
        personalisation
        statistics
      }
    }
    status
  }
`;
export const TranslatedStringFragmentDoc = gql`
  fragment translatedString on TranslatedString {
    en
    no
  }
`;
export const ProductMetadataFragmentDoc = gql`
  fragment productMetadata on ProductMetadata {
    id
    isbn
    authorsFormatted
    format
    thumbnailUri
    title
    description
    language
    readerVoice
    releaseDate
    uniqueSellingPoint
    genres
    playTime
    pages
    publisher
    seriesNumber
    seriesTitle
  }
`;
export const GenreItemFragmentDoc = gql`
  fragment genreItem on GenreItem {
    name {
      ...translatedString
    }
    key
  }
  ${TranslatedStringFragmentDoc}
`;
export const CmsScreenItemFragmentDoc = gql`
  fragment cmsScreenItem on CmsScreenItem {
    ... on BookshelfScreenItem {
      id
      title {
        ...translatedString
      }
      description {
        ...translatedString
      }
    }
    ... on ScreenItemList {
      id
      title {
        ...translatedString
      }
      description {
        ...translatedString
      }
      items {
        ...productMetadata
      }
    }
    ... on GenresScreenItem {
      id
      title {
        ...translatedString
      }
      description {
        ...translatedString
      }
      genres {
        ...genreItem
      }
    }
  }
  ${TranslatedStringFragmentDoc}
  ${ProductMetadataFragmentDoc}
  ${GenreItemFragmentDoc}
`;
export const PublicationFragmentDoc = gql`
  fragment publication on Publication {
    id
    title
    format
    authorsFormatted
    authors {
      id
      name
    }
    thumbnailUri
    ... on AudiobookPublication {
      downloadUri
      streamingUri
    }
    ... on EbookPublication {
      downloadUri
    }
  }
`;
export const BookshelfDocument = gql`
  query Bookshelf {
    bookshelf {
      ... on PublicationList {
        items {
          ...publication
        }
      }
      ...error
    }
  }
  ${PublicationFragmentDoc}
  ${ErrorFragmentDoc}
`;

/**
 * __useBookshelfQuery__
 *
 * To run a query within a React component, call `useBookshelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookshelfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookshelfQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookshelfQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BookshelfQuery,
    BookshelfQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookshelfQuery, BookshelfQueryVariables>(
    BookshelfDocument,
    options,
  );
}
export function useBookshelfLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BookshelfQuery,
    BookshelfQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookshelfQuery, BookshelfQueryVariables>(
    BookshelfDocument,
    options,
  );
}
export type BookshelfQueryHookResult = ReturnType<typeof useBookshelfQuery>;
export type BookshelfLazyQueryHookResult = ReturnType<
  typeof useBookshelfLazyQuery
>;
export type BookshelfQueryResult = Apollo.QueryResult<
  BookshelfQuery,
  BookshelfQueryVariables
>;
export const CmsScreenDocument = gql`
  query CmsScreen($slug: String!) {
    cmsScreen(slug: $slug) {
      ... on CmsScreen {
        id
        slug
        screenItems {
          ...cmsScreenItem
        }
      }
      ...error
    }
  }
  ${CmsScreenItemFragmentDoc}
  ${ErrorFragmentDoc}
`;

/**
 * __useCmsScreenQuery__
 *
 * To run a query within a React component, call `useCmsScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCmsScreenQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCmsScreenQuery(
  baseOptions: Apollo.QueryHookOptions<CmsScreenQuery, CmsScreenQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CmsScreenQuery, CmsScreenQueryVariables>(
    CmsScreenDocument,
    options,
  );
}
export function useCmsScreenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CmsScreenQuery,
    CmsScreenQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CmsScreenQuery, CmsScreenQueryVariables>(
    CmsScreenDocument,
    options,
  );
}
export type CmsScreenQueryHookResult = ReturnType<typeof useCmsScreenQuery>;
export type CmsScreenLazyQueryHookResult = ReturnType<
  typeof useCmsScreenLazyQuery
>;
export type CmsScreenQueryResult = Apollo.QueryResult<
  CmsScreenQuery,
  CmsScreenQueryVariables
>;
export const ProductBundleDocument = gql`
  query ProductBundle($id: String!) {
    productBundle(id: $id) {
      ... on ProductBundle {
        id
        isbn
        authorsFormatted
        title
        description
        thumbnailUri
        products {
          id
          metadata {
            ...productMetadata
          }
        }
      }
      ...error
    }
  }
  ${ProductMetadataFragmentDoc}
  ${ErrorFragmentDoc}
`;

/**
 * __useProductBundleQuery__
 *
 * To run a query within a React component, call `useProductBundleQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBundleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBundleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductBundleQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProductBundleQuery,
    ProductBundleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductBundleQuery, ProductBundleQueryVariables>(
    ProductBundleDocument,
    options,
  );
}
export function useProductBundleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductBundleQuery,
    ProductBundleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductBundleQuery, ProductBundleQueryVariables>(
    ProductBundleDocument,
    options,
  );
}
export type ProductBundleQueryHookResult = ReturnType<
  typeof useProductBundleQuery
>;
export type ProductBundleLazyQueryHookResult = ReturnType<
  typeof useProductBundleLazyQuery
>;
export type ProductBundleQueryResult = Apollo.QueryResult<
  ProductBundleQuery,
  ProductBundleQueryVariables
>;
