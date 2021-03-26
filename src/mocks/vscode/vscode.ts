import * as models from '../../models';

/**
 * Mock VSCode (implements IVSCode)
 */
export class MockVSCode implements models.IVSCode {
  constructor(private _workspace: models.IVSCodeWorkspace) { }

  /**
   * The version of the editor.
   */
  public get version(): string {
    return '1.0.0';
  }


  public get workspace(): models.IVSCodeWorkspace {
    return this._workspace;
  }
}