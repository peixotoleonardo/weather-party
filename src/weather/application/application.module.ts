import { Module } from "@nestjs/common";

import { GetCurrentTemperatureUseCase } from "@weather-party/weather/application/use-cases/get-current-temperature.use-case";
import { IGetCurrentTemperatureUseCase } from "@weather-party/weather/application/use-cases/contracts/get-current-temperature.use-case.interface";

@Module({
  providers: [
    {
      provide: IGetCurrentTemperatureUseCase,
      useClass: GetCurrentTemperatureUseCase,
    }
  ],
  exports: [
    IGetCurrentTemperatureUseCase,
  ]
})
export class ApplicationModule {}