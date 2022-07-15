import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";

import { SuggestTrackDTO } from "@weather-party/tracks/api/rest/dtos/suggest-track.dto";
import { ISuggestTrackUseCase } from "@weather-party/tracks/application/use-cases/contracts/suggest-track.use-case";
import { SuggestTrackInputData } from "@weather-party/tracks/application/use-cases/contracts/suggest-track.input-data";

@Controller('tracks')
export class SuggestTrackController {
  constructor(
    private readonly suggestTrackUseCase: ISuggestTrackUseCase
  ) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  execute(
    @Query() dto: SuggestTrackDTO
  ) {
    return this.suggestTrackUseCase.execute(new SuggestTrackInputData(
      dto.cityName
    ));
  }
}