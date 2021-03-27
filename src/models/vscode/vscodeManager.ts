import { IVSCodeWindow } from './vscodeWindow';
import { IVSCodeCommands } from './vscodeCommands';
import { IVSCodeWorkspace } from './vscodeWorkspace';

export interface IVSCodeManager {
  version: string;
  window: IVSCodeWindow;
  commands: IVSCodeCommands;
  workspace: IVSCodeWorkspace;
}
