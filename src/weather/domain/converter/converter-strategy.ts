import { Temperature } from '@weather-party/weather/domain/temperature';
import { TemperatureScale } from '@weather-party/weather/domain/enum/temperature-scale';

export interface ConverterStrategy {
  convertTo(temperature: Temperature, scale: TemperatureScale): Temperature;
}
