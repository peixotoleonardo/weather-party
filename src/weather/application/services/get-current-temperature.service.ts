import { Temperature } from '@weather-party/weather/domain/temperature';

export class GetCurrentTemperatureQuery {
  constructor(readonly cityName: string) {}
}

export abstract class GetCurrentTemperatureService {
  abstract getCurrentTemperature(
    query: GetCurrentTemperatureQuery,
  ): Promise<Temperature>;
}
