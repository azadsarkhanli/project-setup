import { createHttpLink, execute, FetchResult, gql } from '@apollo/client';
import EncryptedStorage from 'react-native-encrypted-storage';

import { AuthLink } from '../authLink';

const mockGetToken = jest
  .fn()
  .mockImplementation(async refresh =>
    refresh ? 'token-refresh' : 'token-original',
  );

beforeEach(() => {
  EncryptedStorage.clear();
  fetchMock.resetMocks();
  mockGetToken.mockClear();
});

const forbiddenErrorData = {
  product: {
    __typename: 'ForbiddenError',
  },
};

const data = {
  product: {
    __typename: 'Product',
    id: 1,
  },
};

const okResponse = JSON.stringify({ data });
const forbiddenErrorResponse = JSON.stringify({ data: forbiddenErrorData });

const query = gql`
  query Product {
    product {
      id
    }
  }
`;

describe('Apollo AuthLink', () => {
  it('should handle ForbiddenError', async () => {
    fetchMock.mockResponses(forbiddenErrorResponse, okResponse);
    const link = new AuthLink(mockGetToken).concat(createHttpLink());
    const result = await new Promise<FetchResult>((resolve, reject) => {
      execute(link, { query }).subscribe(res => {
        resolve(res);
      }, reject);
    });
    expect(result.data).toEqual(data);
    expect(fetchMock.mock.calls.length).toBe(2);
    const [uri, request1] = fetchMock.mock.calls[0];
    expect(uri).toEqual('/graphql');
    expect((request1?.headers as Record<string, string>).authorization).toBe(
      'Bearer token-original',
    );
    const [, request2] = fetchMock.mock.calls[1];
    expect((request2?.headers as Record<string, string>).authorization).toBe(
      'Bearer token-refresh',
    );
  });

  it('should handle no error', async () => {
    fetchMock.mockResponse(okResponse);
    const link = new AuthLink(mockGetToken).concat(createHttpLink());
    const result = await new Promise<FetchResult>((resolve, reject) => {
      execute(link, { query }).subscribe(res => {
        resolve(res);
      }, reject);
    });
    expect(result.data).toEqual(data);
    expect(fetchMock.mock.calls.length).toBe(1);
    const [, request] = fetchMock.mock.calls[0];
    expect((request?.headers as Record<string, string>).authorization).toBe(
      'Bearer token-original',
    );
  });

  it('should handle one retry', async () => {
    fetchMock.mockResponse(forbiddenErrorResponse);
    const link = new AuthLink(mockGetToken).concat(createHttpLink());
    const result = await new Promise<FetchResult>((resolve, reject) => {
      execute(link, { query }).subscribe(res => {
        resolve(res);
      }, reject);
    });
    expect(result.data).toEqual(forbiddenErrorData);
    expect(fetchMock.mock.calls.length).toBe(2);
    const [, request1] = fetchMock.mock.calls[0];
    expect((request1?.headers as Record<string, string>).authorization).toBe(
      'Bearer token-original',
    );
    const [, request2] = fetchMock.mock.calls[1];
    expect((request2?.headers as Record<string, string>).authorization).toBe(
      'Bearer token-refresh',
    );
  });
});
