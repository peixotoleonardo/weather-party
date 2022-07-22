import { registerAs } from '@nestjs/config';

export const OpenWeatherConfig = registerAs('open-weather', () => ({
  baseUrl: process.env.OPEN_WEATHER_BASE_URL,
  auth: {
    apiKey: process.env.OPEN_WEATHER_API_KEY,
  },
  endpoints: {
    getCurrentTemperature:
      process.env.OPEN_WEATHER_GET_CURRENT_TEMPERATURE_ENDPOINT,
  },
}));
