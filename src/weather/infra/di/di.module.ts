import { Global, Module } from "@nestjs/common";

import { OpenWeatherService } from "@weather-party/weather/infra/rest/open-weather";
import { GetCurrentTemperatureService } from "@weather-party/weather/application/services/get-current-temperature.service";

@Global()
@Module({
  providers: [
    {
      provide: GetCurrentTemperatureService,
      useClass: OpenWeatherService,
    }
  ],
  exports: [
    GetCurrentTemperatureService,
  ]
})
export class DIModule {}