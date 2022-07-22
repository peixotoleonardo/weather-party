import { ConfigType } from "@nestjs/config";
import axios, { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";

import { SpotifyConfig } from "@weather-party/config/spotify.config";

@Injectable()
export class SpotifyClient {
  private readonly http: AxiosInstance;

  constructor(
    @Inject(SpotifyConfig.KEY) private readonly spotifyConfig: ConfigType<typeof SpotifyConfig>
  ) {
    this.http = axios.create({
      baseURL: spotifyConfig.baseUrl,
    });
  }

  async getTracks(trackId: string) {
    const { data } = await this.http.get(`${this.spotifyConfig.endpoints.getTracks}/tracks`);
  }
}