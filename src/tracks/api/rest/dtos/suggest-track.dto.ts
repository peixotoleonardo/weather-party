import { Expose } from 'class-transformer';

export class SuggestTrackDTO {
  @Expose({ name: 'city-name' })
  readonly cityName: string;
}
