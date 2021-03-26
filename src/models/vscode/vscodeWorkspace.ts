import { IVSCodeWorkspaceFolder } from './vscodeWorkspaceFolder';

export interface IVSCodeWorkspace {
  workspaceFolders: readonly IVSCodeWorkspaceFolder[] | undefined;
}