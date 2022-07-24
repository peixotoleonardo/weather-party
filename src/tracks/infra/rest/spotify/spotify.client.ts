import { ConfigType } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Inject, Injectable } from '@nestjs/common';

import { SpotifyConfig } from '@weather-party/config/spotify.config';
import { WrapperAuthService } from '@weather-party/tracks/infra/rest/spotify/wrapper-auth.service';

@Injectable()
export class SpotifyClient {
  private readonly http: AxiosInstance;

  constructor(
    @Inject(SpotifyConfig.KEY)
    spotifyConfig: ConfigType<typeof SpotifyConfig>,
    private readonly authService: WrapperAuthService,
  ) {
    this.http = axios.create({
      baseURL: spotifyConfig.baseUrl,
    });
  }

  async getTracks(playlistId: string) {
    const token = await this.authService.getToken();

    const { data } = await this.http.get(`/v1/playlists/${playlistId}/tracks`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}
