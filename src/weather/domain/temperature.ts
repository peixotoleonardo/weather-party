import { Converter } from '@weather-party/weather/domain/converter';
import { TemperatureScale } from '@weather-party/weather/domain/enum/temperature-scale';

export class Temperature {
  private readonly converter: Converter = new Converter();

  constructor(readonly value: number, readonly scale: TemperatureScale) {}

  convertTo(scaleToConvert: TemperatureScale): Temperature {
    return this.converter.convert(this, scaleToConvert);
  }
}
