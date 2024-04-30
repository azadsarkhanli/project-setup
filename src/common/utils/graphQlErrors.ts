import { GraphQlError } from '../types';

export const graphQlError = <T extends string>(
  typename: T,
  message: string,
  props?: Record<string, unknown>,
): GraphQlError<T> => ({
  message,
  ...props,
  __typename: typename,
});

export const clientError = (message: string) =>
  graphQlError('ClientError', message);

export const networkError = (message: string) =>
  graphQlError('NetworkError', message);

export const unknownError = (message: string) =>
  graphQlError('UnknownError', message);

export const mutationError = (message: string) =>
  graphQlError('MutationError', message);

class GraphQlResponseError extends Error {
  constructor(queryName: string, error: GraphQlError) {
    super(`${queryName} error response: ${JSON.stringify(error)}`);
    this.name = 'GraphQlResponseError';
  }
}

export const toJsError = (queryName: string, error: GraphQlError) =>
  new GraphQlResponseError(queryName, error);
