import * as models from '../../models';

/**
 * Mock VSCodeWorkspaceFolder (implements IVSCodeWorkspaceFolder)
 */
export class MockVSCodeWorkspaceFolder implements models.IVSCodeWorkspaceFolder {
  constructor(private _uri: models.IVSCodeUri, private _index: number) { }
  public get uri(): models.IVSCodeUri {
    return this._uri;
  }
  public get name(): string {
    return this.uri.authority;
  }
  public get index(): number {
    return this._index;
  }
}
