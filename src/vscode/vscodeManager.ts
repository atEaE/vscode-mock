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
   * get workspace modules.
   */
  public get workspace(): models.IVSCodeWorkspace {
    return this.vscode.workspace;
  }
}
