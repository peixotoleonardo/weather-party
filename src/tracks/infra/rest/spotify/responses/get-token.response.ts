import { Expose } from "class-transformer";

export class GetTokenResponse {
  @Expose({ name: 'access_token' })
  readonly accessToken: string;

  @Expose({ name: 'token_type' })
  readonly tokenType: string;

  @Expose({ name: 'expires_in' })
  readonly expiresIn: number;

  getAuthorization(): string {
    return `Bearer ${this.accessToken}`;
  }
}
