import { ConfigType } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Inject, Injectable } from '@nestjs/common';

import { SpotifyConfig } from '@weather-party/config/spotify.config';
import { GetTokenResponse } from '@weather-party/tracks/infra/rest/spotify/responses/get-token.response';

@Injectable()
export class AuthService {
  private readonly http: AxiosInstance;

  constructor(
    @Inject(SpotifyConfig.KEY)
    private readonly spotifyConfig: ConfigType<typeof SpotifyConfig>,
  ) {
    this.http = axios.create({
      baseURL: spotifyConfig.auth.baseUrl,
    });
  }

  async getToken(): Promise<GetTokenResponse> {
    const { data } = await this.http.post<GetTokenResponse>(
      this.spotifyConfig.auth.endpoints.getToken,
      {
        grant_type: this.spotifyConfig.auth.grantType,
      },
      {
        headers: {
          Authorization: `Basic ${this.spotifyConfig.auth.token}`,
        },
      },
    );

    return data;
  }
}
