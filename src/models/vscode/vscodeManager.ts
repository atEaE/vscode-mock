import { IVSCodeWorkspace } from './vscodeWorkspace';

export interface IVSCodeManager {
  version: string;
  workspace: IVSCodeWorkspace;
}
