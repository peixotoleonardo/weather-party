import { Module } from '@nestjs/common';

import { ApiModule } from '@weather-party/tracks/api/api.module';
import { InfraModule } from '@weather-party/tracks/infra/infra.module';
import { ApplicationModule } from '@weather-party/tracks/application/application.module';

@Module({
  imports: [ApiModule, ApplicationModule, InfraModule],
})
export class TracksModule {}
