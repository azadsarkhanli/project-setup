import jwtDecode from 'jwt-decode';

import { track } from '../../../events';
import { captureException } from '../../../utils/logger';
import { TokenData } from '../types';

import { NetworkError, UnauthorizedError } from './errors';
import { refresh, AuthClientConfig, revoke } from './requests';
import {
  ISingleflightService,
  SingleflightService,
} from './SingleflightService';

export type Storage = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
};

const TOKEN_STORAGE_KEY = 'ark_app_access_token';

type IdTokenPayload = {
  uuid: string;
};

type RefreshTokenPayload = {
  exp: number;
  iat: number;
  uuid: string;
};

export class AuthClient {
  constructor(private config: AuthClientConfig, private storage: Storage) {
    this.singleflightService = new SingleflightService();
  }
  private token: TokenData | undefined;
  private singleflightService: ISingleflightService<TokenData>;

  public async getAccessToken(forceRefresh = false) {
    await this.readToken();
    if (!this.token) {
      return null;
    }
    if (forceRefresh || isExpired(this.token)) {
      track([
        'token_update',
        { is_expired: isExpired(this.token), is_force_refresh: forceRefresh },
      ]);

      try {
        if (
          !this.token.refresh_token ||
          isRefreshTokenExpired(this.token.refresh_token)
        ) {
          track(['no_refresh_token_value']);
          throw new UnauthorizedError();
        }
        if (this.token.refresh_token) {
          await this.singleflightService
            .request('refresh-token-request', () =>
              refresh(this.config, this.token?.refresh_token as string),
            )
            .then((response: TokenData) => this.setTokenData(response));
        }
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          this.token = undefined;
        }
        throw e;
      }
    }
    return this.token.access_token;
  }

  public async isAuthenticated() {
    try {
      const accessToken = await this.getAccessToken();
      return !!accessToken;
    } catch (e) {
      // case when we have refresh token; access token is expired
      // and app is offline, we "trust" our refresh token and assume
      // we are still logged in until we get back online
      if (e instanceof UnauthorizedError) {
        await this.logout();
      }
      if (e instanceof NetworkError) {
        return !!this.token?.refresh_token;
      }
      throw e;
    }
  }

  public async getUserId() {
    await this.readToken();
    if (!this.token?.id_token) {
      return null;
    }
    try {
      const idToken = jwtDecode<IdTokenPayload>(this.token.id_token);
      return idToken.uuid;
    } catch (e) {
      captureException(e as Error);
      return null;
    }
  }

  public async setTokenData(tokenData: TokenData): Promise<void> {
    this.token = tokenData;
    return this.storage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokenData));
  }

  public async logout() {
    track(['auth_client_logout_started']);
    const refreshToken = this.token?.refresh_token;
    await this.removeToken();
    if (refreshToken) {
      await revoke(this.config, refreshToken);
    }
  }

  private async readToken() {
    if (!this.token) {
      try {
        const rawData = await this.storage.getItem(TOKEN_STORAGE_KEY);
        if (rawData) {
          const token = JSON.parse(rawData);
          if (token.access_token) {
            this.token = token;
          }
        }
      } catch (e) {
        await this.storage.removeItem(TOKEN_STORAGE_KEY);
        throw e;
      }
    }
  }

  private async removeToken() {
    // TODO: revoke refresh token
    track(['remove_token']);
    this.token = undefined;
    return this.storage.removeItem(TOKEN_STORAGE_KEY);
  }
}

function isExpired(token: TokenData, expirationWindowSeconds = 300) {
  const nowUnixTimestamp = Math.floor(Date.now() / 1000);
  return token.expires_at - nowUnixTimestamp <= expirationWindowSeconds;
}

function isRefreshTokenExpired(refreshToken: string) {
  return (
    new Date().getTime() >
    jwtDecode<RefreshTokenPayload>(refreshToken).exp * 1000
  );
}
