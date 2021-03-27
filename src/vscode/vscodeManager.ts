import * as models from '../models';

export class VSCodeManager implements models.IVSCodeManager {
  constructor(private vscode: models.IVSCode) {
    if (!vscode) {
      throw new ReferenceError(`'vscode' not set to an instance`);
    }
  }

  /**
   * get version infomation.
   */
  public get version(): string {
    return this.vscode.version;
  }

  /**
   * get window modules.
   */
  public get window(): models.IVSCodeWindow {
    return this.vscode.window;
  }

  /**
   * get commands modules.
   */
  public get commands(): models.IVSCodeCommands {
    return this.vscode.commands;
  }

  /**
   * get workspace modules.
   */
  public get workspace(): models.IVSCodeWorkspace {
    return this.vscode.workspace;
  }
}
