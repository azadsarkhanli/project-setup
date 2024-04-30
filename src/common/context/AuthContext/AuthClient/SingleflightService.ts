export interface ISingleflightService<T> {
  request: (key: string, fn: () => Promise<T>) => Promise<T>;
}

export class SingleflightService<T> implements ISingleflightService<T> {
  private inFlightRequests: Map<string, Promise<T>> = new Map();
  public request(key: string, fn: () => Promise<T>): Promise<T> {
    if (this.inFlightRequests.has(key)) {
      return this.inFlightRequests.get(key) as Promise<T>;
    }
    const promise = fn();
    this.inFlightRequests.set(key, promise);
    promise
      .then(() => this.inFlightRequests.delete(key))
      .catch(() => this.inFlightRequests.delete(key));
    return promise;
  }
}
