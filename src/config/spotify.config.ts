import { registerAs } from '@nestjs/config';

export const SpotifyConfig = registerAs('spotify', () => ({
  baseUrl: process.env.SPOTIFY_BASE_URL_BASE_URL,
  auth: {
    baseUrl: process.env.SPOTIFY_AUTH_BASE_URL,
    token: Buffer.from(
      `${process.env.SPOTIFY_AUTH_CLIENT_ID}:${process.env.SPOTIFY_AUTH_CLIENT_SECRET}`,
    ).toString('base64'),
    grantType: 'client_credentials',
    endpoints: {
      getToken: process.env.SPOTIFY_AUTH_GET_TOKEN_ENDPOINT,
    },
  },
  endpoints: {
    getTracks: process.env.SPOTIFY_GET_TRACKS_ENDPOINT,
  }
}));
