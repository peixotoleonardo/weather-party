import { ConfigType } from "@nestjs/config";
import axios, { AxiosInstance } from "axios";
import { Inject, Injectable } from "@nestjs/common";

import { Temperature } from "@weather-party/weather/domain/temperature";
import { OpenWeatherConfig } from "@weather-party/config/open-weather.config";
import { CurrentTemperature } from "@weather-party/weather/infra/rest/open-weather/responses/current-temperature.response";
import { GetCurrentTemperatureQuery, GetCurrentTemperatureService } from "@weather-party/weather/application/services/get-current-temperature.service";

@Injectable()
export class OpenWeatherService implements GetCurrentTemperatureService{
  private readonly http: AxiosInstance;

  constructor(
    @Inject(OpenWeatherConfig.KEY)
    private readonly openWeatherConfig: ConfigType<typeof OpenWeatherConfig>
  ) {
    this.http = axios.create({
      baseURL: openWeatherConfig.baseUrl,
      params: {
        appid: openWeatherConfig.auth.apiKey,
      },
    });
  }

  async getCurrentTemperature(query: GetCurrentTemperatureQuery): Promise<Temperature> {
    const { data } = await this.http.get<CurrentTemperature>(this.openWeatherConfig.endpoints.getCurrentTemperature, {
      params: {
        q: query.cityName,
      },
    });

    return new Temperature(data.main.temp);
  }
}