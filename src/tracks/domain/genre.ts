import { Temperature } from '@weather-party/weather/domain/temperature';
import { Genre as GenreEnum } from '@weather-party/tracks/domain/enums/genre';
import { TemperatureScale } from '@weather-party/weather/domain/enum/temperature-scale';

export class Genre {
  private static pop = new Genre(GenreEnum.Pop);

  private static rock = new Genre(GenreEnum.Rock);

  private static party = new Genre(GenreEnum.Party);

  private static classical = new Genre(GenreEnum.Classical);

  private constructor(readonly genre: GenreEnum) {}

  static create(temperature: Temperature): Genre {
    const temperatureInCelsius = temperature.convertTo(
      TemperatureScale.Celsius,
    );

    if (temperatureInCelsius.value >= 30) {
      return Genre.party;
    }

    if (temperatureInCelsius.value >= 15 && temperatureInCelsius.value < 30) {
      return Genre.pop;
    }

    if (temperatureInCelsius.value >= 10 && temperatureInCelsius.value < 14) {
      return Genre.rock;
    }

    return Genre.classical;
  }
}
