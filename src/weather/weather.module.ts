import { Module } from '@nestjs/common';

import { InfraModule } from '@weather-party/weather/infra/infra.module';
import { ApplicationModule } from '@weather-party/weather/application/application.module';

@Module({
  imports: [InfraModule, ApplicationModule],
  exports: [ApplicationModule],
})
export class WeatherModule {}
