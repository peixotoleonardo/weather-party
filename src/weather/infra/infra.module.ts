import { Module } from "@nestjs/common";

import { DIModule } from "@weather-party/weather/infra/di/di.module";

@Module({
  imports: [DIModule]  
})
export class InfraModule {}