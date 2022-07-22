import { Temperature } from '@weather-party/weather/domain/temperature';
import { TemperatureScale } from '@weather-party/weather/domain/enum/temperature-scale';
import { CelsiusStrategy } from '@weather-party/weather/domain/converter/celsius-strategy';
import { ConverterStrategy } from '@weather-party/weather/domain/converter/converter-strategy';

export class Converter {
  convert(temperature: Temperature, scaleToConvert: TemperatureScale) {
    return this.getStrategy(temperature.scale).convertTo(
      temperature,
      scaleToConvert,
    );
  }

  private getStrategy(scale: TemperatureScale): ConverterStrategy {
    return new CelsiusStrategy();
  }
}
