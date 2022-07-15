import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configs } from '@weather-party/config';
import { TracksModule } from '@weather-party/tracks/tracks.module';

import { WeatherModule } from '@weather-party/weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
    }),
    WeatherModule,
    TracksModule,
  ]
})
export class AppModule {}
