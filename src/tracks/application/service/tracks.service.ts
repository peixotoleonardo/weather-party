import { Genre } from '@weather-party/tracks/domain/genre';
import { Track } from '@weather-party/tracks/domain/track';

export class GetTracksQuery {
  constructor(readonly genre: Genre) {}
}

export abstract class ITracksService {
  abstract getTracks(query: GetTracksQuery): Promise<Track[]>;
}
