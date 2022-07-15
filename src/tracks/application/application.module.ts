import { Module } from '@nestjs/common';

import { WeatherModule } from '@weather-party/weather/weather.module';

import { ISuggestTrackUseCase } from '@weather-party/tracks/application/use-cases/contracts/suggest-track.use-case';
import { SuggestTrackUseCase } from '@weather-party/tracks/application/use-cases/suggest-track.use-case';

@Module({
  imports: [WeatherModule],
  providers: [
    {
      provide: ISuggestTrackUseCase,
      useClass: SuggestTrackUseCase,
    }
  ],
  exports: [ISuggestTrackUseCase]
})
export class ApplicationModule {}
