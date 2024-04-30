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

export type AuthenticateMutationVariables = Exact<{
  code: Scalars['String'];
  codeVerifier?: Maybe<Scalars['String']>;
}>;

export type AuthenticateMutation = {
  __typename: 'Mutation';
  token:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'NotVerifiedEmailError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'TokenWithUser';
        token: {
          __typename: 'Token';
          accessToken: string;
          refreshToken: string;
          expiresAt: number;
          idToken: string;
        };
        user: {
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
      }
    | {
        __typename: 'UserNotFoundError';
        email: string;
        message: string;
        details?: string | null | undefined;
      };
};

export type CheckPasswordlessConnectionMutationVariables = Exact<{
  input: CheckLoginSessionInput;
}>;

export type CheckPasswordlessConnectionMutation = {
  __typename: 'Mutation';
  checkPasswordlessConnection:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'NotFoundError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'PasswordlessConnection';
        id: string;
        status: LoginSessionStatus;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'TokenWithUser';
        token: {
          __typename: 'Token';
          accessToken: string;
          refreshToken: string;
          expiresAt: number;
          idToken: string;
        };
        user: {
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
      };
};

export type CreatePasswordlessConnectionMutationVariables = Exact<{
  input: CreateLoginSessionInput;
}>;

export type CreatePasswordlessConnectionMutation = {
  __typename: 'Mutation';
  createPasswordlessConnection:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'PasswordlessConnection';
        id: string;
        status: LoginSessionStatus;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'UserNotFoundError';
        message: string;
        details?: string | null | undefined;
      };
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename: 'Mutation';
  login:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'NotFoundError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'TokenWithUser';
        token: {
          __typename: 'Token';
          accessToken: string;
          refreshToken: string;
          expiresAt: number;
          idToken: string;
        };
        user: {
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
      };
};

export type RegisterNewUserMutationVariables = Exact<{
  input: RegisterNewUserDto;
}>;

export type RegisterNewUserMutation = {
  __typename: 'Mutation';
  registerNewUser:
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
        __typename: 'InvalidFormFieldsExternalError';
        message: string;
        details?: string | null | undefined;
        formFields: Array<{
          __typename: 'InvalidFormFieldError';
          field: string;
          error: string;
          type: string;
        }>;
      }
    | {
        __typename: 'InvalidFormFieldsInternalError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'TokenWithUser';
        token: {
          __typename: 'Token';
          accessToken: string;
          refreshToken: string;
          expiresAt: number;
          idToken: string;
        };
        user: {
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
      }
    | {
        __typename: 'UnauthorizedError';
        message: string;
        details?: string | null | undefined;
      };
};

export type TriggerEmailConfirmationMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type TriggerEmailConfirmationMutation = {
  __typename: 'Mutation';
  triggerEmailConfirmation:
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
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      }
    | { __typename: 'TriggerEmailConfirmationStatus'; success: boolean }
    | {
        __typename: 'UnauthorizedError';
        message: string;
        details?: string | null | undefined;
      };
};

export type VerifyEmailCodeMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;

export type VerifyEmailCodeMutation = {
  __typename: 'Mutation';
  verifyEmailCode:
    | {
        __typename: 'BadRequestError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'EmailVerificationCodeExpiredError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'EmailVerificationCodeInvalidError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'EmailVerificationCodeLimitError';
        message: string;
        details?: string | null | undefined;
      }
    | {
        __typename: 'ForbiddenError';
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
      }
    | { __typename: 'VerifyEmailCodeStatus'; success: boolean };
};

export type PasswordlessConnectionFragment = {
  __typename: 'PasswordlessConnection';
  id: string;
  status: LoginSessionStatus;
};

export type TokenFragment = {
  __typename: 'TokenWithUser';
  token: {
    __typename: 'Token';
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    idToken: string;
  };
  user: {
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
};

export const ErrorFragmentDoc = gql`
  fragment error on Error {
    message
    details
  }
`;
export const PasswordlessConnectionFragmentDoc = gql`
  fragment passwordlessConnection on PasswordlessConnection {
    id
    status
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
export const TokenFragmentDoc = gql`
  fragment token on TokenWithUser {
    token {
      accessToken
      refreshToken
      expiresAt
      idToken
    }
    user {
      ...user
    }
  }
  ${UserFragmentDoc}
`;
export const AuthenticateDocument = gql`
  mutation Authenticate($code: String!, $codeVerifier: String) {
    token(code: $code, codeVerifier: $codeVerifier) {
      ...token
      ... on UserNotFoundError {
        email
      }
      ...error
    }
  }
  ${TokenFragmentDoc}
  ${ErrorFragmentDoc}
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      code: // value for 'code'
 *      codeVerifier: // value for 'codeVerifier'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, options);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
export type AuthenticateMutationResult =
  Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export const CheckPasswordlessConnectionDocument = gql`
  mutation CheckPasswordlessConnection($input: CheckLoginSessionInput!) {
    checkPasswordlessConnection(input: $input) {
      ...token
      ...passwordlessConnection
      ...error
    }
  }
  ${TokenFragmentDoc}
  ${PasswordlessConnectionFragmentDoc}
  ${ErrorFragmentDoc}
`;
export type CheckPasswordlessConnectionMutationFn = Apollo.MutationFunction<
  CheckPasswordlessConnectionMutation,
  CheckPasswordlessConnectionMutationVariables
>;

/**
 * __useCheckPasswordlessConnectionMutation__
 *
 * To run a mutation, you first call `useCheckPasswordlessConnectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckPasswordlessConnectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkPasswordlessConnectionMutation, { data, loading, error }] = useCheckPasswordlessConnectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckPasswordlessConnectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CheckPasswordlessConnectionMutation,
    CheckPasswordlessConnectionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CheckPasswordlessConnectionMutation,
    CheckPasswordlessConnectionMutationVariables
  >(CheckPasswordlessConnectionDocument, options);
}
export type CheckPasswordlessConnectionMutationHookResult = ReturnType<
  typeof useCheckPasswordlessConnectionMutation
>;
export type CheckPasswordlessConnectionMutationResult =
  Apollo.MutationResult<CheckPasswordlessConnectionMutation>;
export type CheckPasswordlessConnectionMutationOptions =
  Apollo.BaseMutationOptions<
    CheckPasswordlessConnectionMutation,
    CheckPasswordlessConnectionMutationVariables
  >;
export const CreatePasswordlessConnectionDocument = gql`
  mutation CreatePasswordlessConnection($input: CreateLoginSessionInput!) {
    createPasswordlessConnection(input: $input) {
      ...passwordlessConnection
      ...error
    }
  }
  ${PasswordlessConnectionFragmentDoc}
  ${ErrorFragmentDoc}
`;
export type CreatePasswordlessConnectionMutationFn = Apollo.MutationFunction<
  CreatePasswordlessConnectionMutation,
  CreatePasswordlessConnectionMutationVariables
>;

/**
 * __useCreatePasswordlessConnectionMutation__
 *
 * To run a mutation, you first call `useCreatePasswordlessConnectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePasswordlessConnectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPasswordlessConnectionMutation, { data, loading, error }] = useCreatePasswordlessConnectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePasswordlessConnectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePasswordlessConnectionMutation,
    CreatePasswordlessConnectionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePasswordlessConnectionMutation,
    CreatePasswordlessConnectionMutationVariables
  >(CreatePasswordlessConnectionDocument, options);
}
export type CreatePasswordlessConnectionMutationHookResult = ReturnType<
  typeof useCreatePasswordlessConnectionMutation
>;
export type CreatePasswordlessConnectionMutationResult =
  Apollo.MutationResult<CreatePasswordlessConnectionMutation>;
export type CreatePasswordlessConnectionMutationOptions =
  Apollo.BaseMutationOptions<
    CreatePasswordlessConnectionMutation,
    CreatePasswordlessConnectionMutationVariables
  >;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...token
      ...error
    }
  }
  ${TokenFragmentDoc}
  ${ErrorFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterNewUserDocument = gql`
  mutation RegisterNewUser($input: RegisterNewUserDto!) {
    registerNewUser(input: $input) {
      ...token
      ...error
      ... on InvalidFormFieldsExternalError {
        formFields {
          field
          error
          type
        }
      }
    }
  }
  ${TokenFragmentDoc}
  ${ErrorFragmentDoc}
`;
export type RegisterNewUserMutationFn = Apollo.MutationFunction<
  RegisterNewUserMutation,
  RegisterNewUserMutationVariables
>;

/**
 * __useRegisterNewUserMutation__
 *
 * To run a mutation, you first call `useRegisterNewUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterNewUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerNewUserMutation, { data, loading, error }] = useRegisterNewUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterNewUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterNewUserMutation,
    RegisterNewUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterNewUserMutation,
    RegisterNewUserMutationVariables
  >(RegisterNewUserDocument, options);
}
export type RegisterNewUserMutationHookResult = ReturnType<
  typeof useRegisterNewUserMutation
>;
export type RegisterNewUserMutationResult =
  Apollo.MutationResult<RegisterNewUserMutation>;
export type RegisterNewUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterNewUserMutation,
  RegisterNewUserMutationVariables
>;
export const TriggerEmailConfirmationDocument = gql`
  mutation TriggerEmailConfirmation($email: String!) {
    triggerEmailConfirmation(email: $email) {
      ... on TriggerEmailConfirmationStatus {
        success
      }
      ...error
    }
  }
  ${ErrorFragmentDoc}
`;
export type TriggerEmailConfirmationMutationFn = Apollo.MutationFunction<
  TriggerEmailConfirmationMutation,
  TriggerEmailConfirmationMutationVariables
>;

/**
 * __useTriggerEmailConfirmationMutation__
 *
 * To run a mutation, you first call `useTriggerEmailConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerEmailConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerEmailConfirmationMutation, { data, loading, error }] = useTriggerEmailConfirmationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useTriggerEmailConfirmationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TriggerEmailConfirmationMutation,
    TriggerEmailConfirmationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TriggerEmailConfirmationMutation,
    TriggerEmailConfirmationMutationVariables
  >(TriggerEmailConfirmationDocument, options);
}
export type TriggerEmailConfirmationMutationHookResult = ReturnType<
  typeof useTriggerEmailConfirmationMutation
>;
export type TriggerEmailConfirmationMutationResult =
  Apollo.MutationResult<TriggerEmailConfirmationMutation>;
export type TriggerEmailConfirmationMutationOptions =
  Apollo.BaseMutationOptions<
    TriggerEmailConfirmationMutation,
    TriggerEmailConfirmationMutationVariables
  >;
export const VerifyEmailCodeDocument = gql`
  mutation VerifyEmailCode($email: String!, $code: String!) {
    verifyEmailCode(email: $email, code: $code) {
      ... on VerifyEmailCodeStatus {
        success
      }
      ...error
    }
  }
  ${ErrorFragmentDoc}
`;
export type VerifyEmailCodeMutationFn = Apollo.MutationFunction<
  VerifyEmailCodeMutation,
  VerifyEmailCodeMutationVariables
>;

/**
 * __useVerifyEmailCodeMutation__
 *
 * To run a mutation, you first call `useVerifyEmailCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailCodeMutation, { data, loading, error }] = useVerifyEmailCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyEmailCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyEmailCodeMutation,
    VerifyEmailCodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyEmailCodeMutation,
    VerifyEmailCodeMutationVariables
  >(VerifyEmailCodeDocument, options);
}
export type VerifyEmailCodeMutationHookResult = ReturnType<
  typeof useVerifyEmailCodeMutation
>;
export type VerifyEmailCodeMutationResult =
  Apollo.MutationResult<VerifyEmailCodeMutation>;
export type VerifyEmailCodeMutationOptions = Apollo.BaseMutationOptions<
  VerifyEmailCodeMutation,
  VerifyEmailCodeMutationVariables
>;
