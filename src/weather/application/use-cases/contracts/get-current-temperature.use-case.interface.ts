import { Temperature } from "@weather-party/weather/domain/temperature";
import { GetCurrentTemperatureInputData } from "@weather-party/weather/application/use-cases/contracts/get-current-temperature.input-data";

export abstract class IGetCurrentTemperatureUseCase {
  abstract execute(input: GetCurrentTemperatureInputData): Promise<Temperature>;
}
