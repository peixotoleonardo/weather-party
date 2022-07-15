import { SuggestTrackInputData } from "@weather-party/tracks/application/use-cases/contracts/suggest-track.input-data";

export abstract class ISuggestTrackUseCase {
  abstract execute(input: SuggestTrackInputData): Promise<string>;
}