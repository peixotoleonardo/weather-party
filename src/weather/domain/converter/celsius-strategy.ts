import { Temperature } from '@weather-party/weather/domain/temperature';
import { ConverterStrategy } from '@weather-party/weather/domain/converter/converter-strategy';
import { TemperatureScale } from '@weather-party/weather/domain/enum/temperature-scale';

export class CelsiusStrategy implements ConverterStrategy {
  convertTo(temperature: Temperature, scale: TemperatureScale): Temperature {
    if (scale === TemperatureScale.Celsius) {
      return this.toCelsius(temperature);
    }

    if (scale === TemperatureScale.Kelvin) {
      return this.toKelvin(temperature);
    }

    if (scale === TemperatureScale.Fahrenheit) {
      return this.toFahrenheit(temperature);
    }
  }

  private toKelvin(temperature: Temperature): Temperature {
    return new Temperature(temperature.value + 273, TemperatureScale.Kelvin);
  }

  private toCelsius(temperature: Temperature): Temperature {
    return temperature;
  }

  private toFahrenheit(temperature: Temperature): Temperature {
    return new Temperature(
      1.8 * temperature.value + 32,
      TemperatureScale.Fahrenheit,
    );
  }
}
