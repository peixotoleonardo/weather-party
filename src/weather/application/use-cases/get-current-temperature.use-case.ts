import { Injectable } from '@nestjs/common';

import { Temperature } from '@weather-party/weather/domain/temperature';
import { GetCurrentTemperatureInputData } from '@weather-party/weather/application/use-cases/contracts/get-current-temperature.input-data';
import { IGetCurrentTemperatureUseCase } from '@weather-party/weather/application/use-cases/contracts/get-current-temperature.use-case.interface';
import {
  GetCurrentTemperatureQuery,
  GetCurrentTemperatureService,
} from '@weather-party/weather/application/services/get-current-temperature.service';

@Injectable()
export class GetCurrentTemperatureUseCase
  implements IGetCurrentTemperatureUseCase
{
  constructor(
    private readonly getCurrentTemperatureService: GetCurrentTemperatureService,
  ) {}

  async execute(input: GetCurrentTemperatureInputData): Promise<Temperature> {
    return this.getCurrentTemperatureService.getCurrentTemperature(
      new GetCurrentTemperatureQuery(input.cityName),
    );
  }
}
