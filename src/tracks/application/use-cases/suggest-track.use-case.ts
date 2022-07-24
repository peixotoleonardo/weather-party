import { Injectable } from '@nestjs/common';

import { Track } from '@weather-party/tracks/domain/track';
import { Genre } from '@weather-party/tracks/domain/genre';
import {
  GetTracksQuery,
  ITracksService,
} from '@weather-party/tracks/application/service/tracks.service';
import { ISuggestTrackUseCase } from '@weather-party/tracks/application/use-cases/contracts/suggest-track.use-case';
import { SuggestTrackInputData } from '@weather-party/tracks/application/use-cases/contracts/suggest-track.input-data';
import { GetCurrentTemperatureInputData } from '@weather-party/weather/application/use-cases/contracts/get-current-temperature.input-data';
import { IGetCurrentTemperatureUseCase } from '@weather-party/weather/application/use-cases/contracts/get-current-temperature.use-case.interface';

@Injectable()
export class SuggestTrackUseCase implements ISuggestTrackUseCase {
  constructor(
    private readonly tracksService: ITracksService,
    private readonly getCurrentTemperatureUseCase: IGetCurrentTemperatureUseCase,
  ) {}

  async execute(input: SuggestTrackInputData): Promise<Track[]> {
    const temperature = await this.getCurrentTemperatureUseCase.execute(
      new GetCurrentTemperatureInputData(input.cityName),
    );

    const query = new GetTracksQuery(Genre.fromTemperature(temperature));

    return await this.tracksService.getTracks(query);
  }
}
