import { GetTokenResponse } from '@weather-party/tracks/infra/rest/spotify/responses/get-token.response';

export interface Auth {
  getToken(): Promise<GetTokenResponse>;
}
