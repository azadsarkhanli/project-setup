import {
  ApolloLink,
  Observable,
  Observer,
  ObservableSubscription,
  Operation,
  NextLink,
  FetchResult,
} from '@apollo/client';
import { ExecutionResult } from 'graphql';

type GetTokenFn = (forceRefresh?: boolean) => Promise<string | null>;

const hasForbiddenError = (response?: ExecutionResult) => {
  if (!response?.data) {
    return false;
  }
  return Object.values(response.data).some(
    value => typeof value === 'object' && value.__typename === 'ForbiddenError',
  );
};

export class AuthLink extends ApolloLink {
  constructor(private getToken: GetTokenFn) {
    super();
  }

  public request(
    operation: Operation,
    forward: NextLink,
  ): Observable<FetchResult> {
    return new Observable((observer: Observer<ExecutionResult>) => {
      let subscription: ObservableSubscription;
      let retried = false;

      const setTokenAndForward = (forceRefresh = false) => {
        this.getToken(forceRefresh)
          .then(token => {
            const headers = operation.getContext();
            operation.setContext({
              headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
              },
            });
            subscription = forward(operation).subscribe(handler);
          })
          .catch(() => {
            subscription = forward(operation).subscribe(handler);
          });
      };

      const handleResponse = (
        { response }: { response?: ExecutionResult },
        cb: () => void,
      ) => {
        if (!retried && hasForbiddenError(response)) {
          retried = true;
          if (subscription) {
            subscription.unsubscribe();
          }
          setTokenAndForward(true);
          return;
        }
        cb();
      };

      const handler = {
        next: (response: ExecutionResult) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          handleResponse({ response }, () => observer.next!(response));
        },
        error: (error: unknown) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          observer.error!(error);
        },
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        complete: observer.complete!.bind(observer),
      };

      setTokenAndForward();

      return () => {
        if (subscription) {
          subscription.unsubscribe();
        }
      };
    });
  }
}
