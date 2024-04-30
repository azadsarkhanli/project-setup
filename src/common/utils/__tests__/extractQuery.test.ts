import { ApolloError, OperationVariables, QueryResult } from '@apollo/client';

import { GraphQlError } from '../../types';
import { extractQuery } from '../extractQuery';
import { clientError, unknownError, networkError } from '../graphQlErrors';

const user = {
  __typename: 'User',
  id: '1',
  name: 'John Smith',
};

type User = typeof user;
type Query = { user: User | GraphQlError };

describe('extractQuery util', () => {
  it('should return data', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: {
          user,
        },
        loading: false,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toStrictEqual(user);
    expect(loading).toBeFalsy();
    expect(error).toBeUndefined();
  });

  it('should handle error object', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: {
          user: clientError('test'),
        },
        loading: false,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toBeUndefined();
    expect(loading).toBeFalsy();
    expect(error).toStrictEqual(clientError('test'));
  });

  it('should ignore error field if data type is correct', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: {
          user,
        },
        loading: false,
        error: new Error('test') as ApolloError,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toStrictEqual(user);
    expect(loading).toBeFalsy();
    expect(error).toBeUndefined();
  });

  it('should passthrough data on loading', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: {
          user,
        },
        loading: true,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toStrictEqual(user);
    expect(loading).toBeTruthy();
    expect(error).toBeUndefined();
  });

  it('should handle error field', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: undefined as unknown as Query,
        loading: false,
        error: new Error('test') as ApolloError,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toBeUndefined();
    expect(loading).toBeFalsy();
    expect(error).toStrictEqual(unknownError('Unable to fetch data'));
  });

  it('should handle network error', () => {
    const { data, loading, error } = extractQuery<
      Query,
      OperationVariables,
      User
    >(
      {
        data: undefined as unknown as Query,
        loading: false,
        error: {
          networkError: { message: 'Test network error' },
        } as ApolloError,
      } as QueryResult<Query>,
      'User',
      payload => payload.user,
    );
    expect(data).toBeUndefined();
    expect(loading).toBeFalsy();
    expect(error).toStrictEqual(networkError('Test network error'));
  });
});
