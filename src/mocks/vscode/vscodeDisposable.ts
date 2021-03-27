import { IVSCodeDisposable } from '../../models/vscode';

/**
 * Mock VSCodeDisposable (implements IVSCodeDisposable)
 */
export class MockVSCodeDisposable implements IVSCodeDisposable {
  constructor(private _delegate: () => any) { }
  public dispose() {
    return this._delegate();
  }
}
