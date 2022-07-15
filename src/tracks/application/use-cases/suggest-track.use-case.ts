import { Injectable } from "@nestjs/common";
import { SuggestTrackInputData } from "@weather-party/tracks/application/use-cases/contracts/suggest-track.input-data";

import { ISuggestTrackUseCase } from "@weather-party/tracks/application/use-cases/contracts/suggest-track.use-case";
import { GetCurrentTemperatureInputData } from "@weather-party/weather/application/use-cases/contracts/get-current-temperature.input-data";
import { IGetCurrentTemperatureUseCase } from "@weather-party/weather/application/use-cases/contracts/get-current-temperature.use-case.interface";

@Injectable()
export class SuggestTrackUseCase implements ISuggestTrackUseCase {
  constructor(private readonly getCurrentTemperatureUseCase: IGetCurrentTemperatureUseCase) {}

  async execute(input: SuggestTrackInputData): Promise<string> {
    const temperature = await this.getCurrentTemperatureUseCase.execute(
      new GetCurrentTemperatureInputData(input.cityName)
    );

    return temperature.value.toString();
  }
}