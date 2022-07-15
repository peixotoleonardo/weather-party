import { Module } from '@nestjs/common';

import { ApiModule } from '@weather-party/tracks/api/api.module';
import { ApplicationModule } from '@weather-party/tracks/application/application.module';

@Module({
  imports: [
    ApiModule,
    ApplicationModule, 
  ]
})
export class TracksModule {}
