import { IVSCodeWindow } from './vscodeWindow';
import { IVSCodeCommands } from './vscodeCommands';
import { IVSCodeWorkspace } from './vscodeWorkspace';
export interface IVSCode {
  version: string;
  window: IVSCodeWindow;
  commands: IVSCodeCommands;
  workspace: IVSCodeWorkspace;
}
