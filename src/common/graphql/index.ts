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
  screenWidth: Scalars['String'];
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

export type UserQueryVariables = Exact<{
  fullRefresh?: Maybe<Scalars['Boolean']>;
}>;

export type UserQuery = {
  __typename: 'Query';
  user:
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
    | {
        __typename: 'UnauthorizedError';
        message: string;
        details?: string | null | undefined;
      }
    | {
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
      }
    | {
        __typename: 'UserNotFoundError';
        message: string;
        details?: string | null | undefined;
      };
};

export type RemoteConfigurationQueryVariables = Exact<{ [key: string]: never }>;

export type RemoteConfigurationQuery = {
  __typename: 'Query';
  configuration:
    | {
        __typename: 'ClientConfiguration';
        minAppVersion: string;
        events: {
          __typename: 'ClientEventsConfiguration';
          sendEvents: boolean;
          host: string;
          token: string;
        };
        feedback: {
          __typename: 'FeedbackConfiguration';
          url?: string | null | undefined;
        };
        search: {
          __typename: 'ClientProductSearchConfiguration';
          appId: string;
          key: string;
          index: string;
          filter: string;
        };
      }
    | {
        __typename: 'ServerError';
        message: string;
        details?: string | null | undefined;
      };
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
export const UserDocument = gql`
  query User($fullRefresh: Boolean) {
    user(fullRefresh: $fullRefresh) {
      ...user
      ...error
    }
  }
  ${UserFragmentDoc}
  ${ErrorFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      fullRefresh: // value for 'fullRefresh'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const RemoteConfigurationDocument = gql`
  query RemoteConfiguration {
    configuration {
      ... on ClientConfiguration {
        minAppVersion
        events {
          sendEvents
          host
          token
        }
        feedback {
          url
        }
        search {
          appId
          key
          index
          filter
        }
      }
      ...error
    }
  }
  ${ErrorFragmentDoc}
`;

/**
 * __useRemoteConfigurationQuery__
 *
 * To run a query within a React component, call `useRemoteConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoteConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoteConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useRemoteConfigurationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RemoteConfigurationQuery,
    RemoteConfigurationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RemoteConfigurationQuery,
    RemoteConfigurationQueryVariables
  >(RemoteConfigurationDocument, options);
}
export function useRemoteConfigurationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RemoteConfigurationQuery,
    RemoteConfigurationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RemoteConfigurationQuery,
    RemoteConfigurationQueryVariables
  >(RemoteConfigurationDocument, options);
}
export type RemoteConfigurationQueryHookResult = ReturnType<
  typeof useRemoteConfigurationQuery
>;
export type RemoteConfigurationLazyQueryHookResult = ReturnType<
  typeof useRemoteConfigurationLazyQuery
>;
export type RemoteConfigurationQueryResult = Apollo.QueryResult<
  RemoteConfigurationQuery,
  RemoteConfigurationQueryVariables
>;
