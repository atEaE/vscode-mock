import * as models from '../../models';

export class MockVSCodeUri implements models.IVSCodeUri {
  constructor(private _scheme: string, private _authority: string, private _path: string, private _query: string, private _fragment: string) {
  }

  public get scheme(): string {
    return this._scheme;
  }
  public get authority(): string {
    return this._authority;
  }
  public get path(): string {
    return this._path;
  }
  public get query(): string {
    return this._query;
  }
  public get fragment(): string {
    return this._fragment;
  }
  public get fsPath(): string {
    return this._path;
  }

  with(change: { scheme?: string | undefined; authority?: string | undefined; path?: string | undefined; query?: string | undefined; fragment?: string | undefined; }): models.IVSCodeUri {
    if (change.scheme) { this._scheme = change.scheme; }
    if (change.authority) { this._authority = change.authority; }
    if (change.path) { this._path = change.path; }
    if (change.query) { this._query = change.query; }
    if (change.fragment) { this._fragment = change.fragment; }
    return this;
  }

  toString(skipEncoding?: boolean): string {
    return JSON.stringify(this);
  }

  toJSON() {
    return JSON.parse(this.toString());
  }
}
