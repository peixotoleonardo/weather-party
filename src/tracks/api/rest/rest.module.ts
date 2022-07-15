import { Module } from '@nestjs/common';

import { ApplicationModule } from '@weather-party/tracks/application/application.module';
import { SuggestTrackController } from '@weather-party/tracks/api/rest/controllers/suggest-track.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [SuggestTrackController]
})
export class RestModule {}
