import * as models from '../../models';

/**
 * Mock VSCode (implements IVSCode)
 */
export class MockVSCode implements models.IVSCode {
  constructor(private _commands: models.IVSCodeCommands, private _workspace: models.IVSCodeWorkspace) { }

  /**
   * The version of the editor.
   */
  public get version(): string {
    return '1.0.0';
  }

  /**
   * get window modules.
   */
  public get window(): models.IVSCodeWindow {
    throw new Error('Not implemented')
  }

  /**
   * get commands modules.
   */
  public get commands(): models.IVSCodeCommands {
    return this._commands;
  }

  /**
   * get workspace modules.
   */
  public get workspace(): models.IVSCodeWorkspace {
    return this._workspace;
  }
}