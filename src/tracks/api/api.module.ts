import { Module } from '@nestjs/common';

import { RestModule } from '@weather-party/tracks/api/rest/rest.module';

@Module({
  imports: [RestModule],
})
export class ApiModule {}
