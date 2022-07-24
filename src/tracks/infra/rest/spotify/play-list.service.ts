import { Injectable } from '@nestjs/common';

import { Track } from '@weather-party/tracks/domain/track';
import {
  GetTracksQuery,
  ITracksService,
} from '@weather-party/tracks/application/service/tracks.service';
import { WrapperAuthService } from '@weather-party/tracks/infra/rest/spotify/wrapper-auth.service';

@Injectable()
export class PlayListService implements ITracksService {
  constructor(private readonly authService: WrapperAuthService) {}

  async getTracks(query: GetTracksQuery): Promise<Track[]> {
    const token = await this.authService.getToken();

    throw new Error('Method not implemented.');
  }
}
