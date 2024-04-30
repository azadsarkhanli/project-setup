import { QueryResult, MutationResult } from '@apollo/client';
import { useMemo } from 'react';

import { GraphQlNode, GraphQlError, Maybe } from '../types';

import { networkError, unknownError, mutationError } from './graphQlErrors';

export type MutationReturnType<ExpectedNode> = {
  loading: boolean;
  data?: ExpectedNode;
  error?: GraphQlError;
};

type QueryReturnType<ExpectedNode> =
  | ({
      loading: false;
    } & (
      | {
          data: ExpectedNode;
          error?: GraphQlError;
        }
      | {
          data: undefined;
          error: GraphQlError;
        }
    ))
  | {
      loading: true;
      data?: ExpectedNode;
      error?: GraphQlError;
    };

type ResultType<TData> = Pick<
  QueryResult<TData> | MutationResult<TData>,
  'data' | 'loading' | 'error'
>;

function extract<TData, ExpectedNode extends GraphQlNode>(
  result: ResultType<TData>,
  typename: string,
  getPayload: (data: TData) => Maybe<ExpectedNode | GraphQlError>,
) {
  const { data, error } = result;
  let appError;
  if (data) {
    const payload = getPayload(data);
    if (payload && payload.__typename === typename) {
      return {
        data: payload as ExpectedNode,
        loading: result.loading,
        error: error?.networkError
          ? networkError(error.networkError.message)
          : undefined,
      };
    } else if (payload) {
      appError = payload as GraphQlError;
    }
  }

  if (error?.networkError) {
    appError = networkError(error.networkError.message);
  }

  return {
    data: undefined,
    loading: result.loading,
    error: appError,
  };
}

export function extractQuery<
  TData,
  TVariables,
  ExpectedNode extends GraphQlNode,
>(
  result: QueryResult<TData, TVariables>,
  typename: string,
  getPayload: (data: TData) => ExpectedNode | GraphQlError,
): QueryReturnType<ExpectedNode> &
  Pick<QueryResult<TData, TVariables>, 'refetch'> {
  const res = extract<TData, ExpectedNode>(result, typename, getPayload);

  const common = {
    refetch: result.refetch,
  };

  if (res.loading) {
    return {
      ...common,
      ...res,
      loading: true,
    };
  }
  const data = res.data;
  if (data) {
    return {
      ...common,
      data,
      loading: false,
      error: res.error,
    };
  }
  return {
    ...common,
    data: undefined,
    loading: false,
    error: res.error || unknownError('Unable to fetch data'),
  };
}

export function extractMutation<TData, ExpectedNode extends GraphQlNode>(
  result: MutationResult<TData>,
  typename: string,
  getPayload: (data: TData) => Maybe<ExpectedNode | GraphQlError>,
): MutationReturnType<ExpectedNode> {
  const res = extract<TData, ExpectedNode>(result, typename, getPayload);
  if (res.data || res.loading || res.error) {
    return res;
  }
  if (result.error) {
    return {
      data: undefined,
      loading: false,
      error: mutationError(result.error.message),
    };
  }
  return res;
}

type ExtractQuery = <TData, TVariables, ExpectedNode extends GraphQlNode>(
  result: QueryResult<TData, TVariables>,
  typename: string,
  getPayload: (data: TData) => ExpectedNode | GraphQlError,
) => QueryReturnType<ExpectedNode> &
  Pick<QueryResult<TData, TVariables>, 'refetch'>;

export const useExtractQuery: ExtractQuery = (result, typename, getPayload) => {
  return useMemo(
    () => extractQuery(result, typename, getPayload),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [result.data, result.loading, result.error, typename],
  );
};
