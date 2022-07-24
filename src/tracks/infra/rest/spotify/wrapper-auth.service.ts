import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';

import { Auth } from '@weather-party/tracks/infra/rest/spotify/contracts/auth';
import { AuthService } from '@weather-party/tracks/infra/rest/spotify/auth.service';
import { GetTokenResponse } from '@weather-party/tracks/infra/rest/spotify/responses/get-token.response';

@Injectable()
export class WrapperAuthService implements Auth {
  constructor(
    private readonly auth: AuthService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getToken(): Promise<GetTokenResponse> {
    const tokenFromCache = await this.getTokenFromCache();

    if (tokenFromCache) {
      return tokenFromCache;
    }

    const token = await this.auth.getToken();

    await this.setTokenInCache(token);

    return token;
  }

  private async setTokenInCache(token: GetTokenResponse): Promise<void> {
    await this.cacheManager.set('spotify-token', instanceToPlain(token), {
      ttl: token.expiresIn,
    });
  }

  private async getTokenFromCache(): Promise<GetTokenResponse> {
    return plainToInstance(GetTokenResponse, await this.cacheManager.get<GetTokenResponse>('spotify-token'));
  }
}
