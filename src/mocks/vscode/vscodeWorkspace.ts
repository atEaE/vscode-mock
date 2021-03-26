import { IVSCodeWorkspace, IVSCodeWorkspaceFolder } from '../../models';

/**
 * genereate no opened workspace.
 */
export function generateNoOpenWorkspace(): IVSCodeWorkspace {
  return new MockVSCodeWorkspace(undefined);
}

/**
 * Mock VSCodeWorkspace (implements IVSCodeWorkspace)
 */
export class MockVSCodeWorkspace implements IVSCodeWorkspace {
  constructor(private _workspaceFolders: IVSCodeWorkspaceFolder[] | undefined) { }
  public get workspaceFolders(): readonly IVSCodeWorkspaceFolder[] | undefined {
    return this._workspaceFolders;
  }
}