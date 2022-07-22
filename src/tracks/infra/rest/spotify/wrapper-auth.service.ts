import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";

import { AuthService } from "@weather-party/tracks/infra/rest/spotify/auth.service";
import { GetTokenResponse } from '@weather-party/tracks/infra/rest/spotify/responses/get-token.response';

@Injectable()
export class WrapperAuthService {
  constructor(
    private readonly auth: AuthService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getToken(): Promise<GetTokenResponse> {
    const tokenFromCache = await this.cacheManager.get<GetTokenResponse>('spotify-token');

    if (tokenFromCache) {
      return tokenFromCache;
    }

    const token = await this.auth.getToken();
    await this.cacheManager.set('spotify-token', token, { ttl: token.expires_in })

    return token;
  }
}