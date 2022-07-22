export class Track {
  private _name: string;

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  constructor(name: string) {
    this._name = name;
  }
}
