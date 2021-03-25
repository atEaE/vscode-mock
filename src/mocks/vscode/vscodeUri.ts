import * as models from '../../models';

export class MockVSCodeUri implements models.IVSCodeUri {
  constructor(private _scheme: string, private _authority: string, private _path: string, private _query: string, private _fragment: string) {
  }

  readonly scheme: string = this._scheme;
  readonly authority: string = this._authority;
  readonly path: string = this._path;
  readonly query: string = this._query;
  readonly fragment: string = this._fragment;
  readonly fsPath: string = this._path;

  with(change: { scheme?: string | undefined; authority?: string | undefined; path?: string | undefined; query?: string | undefined; fragment?: string | undefined; }): models.IVSCodeUri {
    if (change.scheme) {this._scheme = change.scheme;}
    if (change.authority) {this._authority = change.authority;}
    if (change.path) {this._path = change.path;}
    if (change.query) {this._query = change.query;}
    if (change.fragment) {this._fragment = change.fragment;}
    return this;
  }

  toString(skipEncoding?: boolean): string {
    return JSON.stringify(this);
  }

  toJSON() {
    return JSON.parse(this.toString());
  }
}
