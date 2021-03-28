import { IVSCodePseudoterminal } from '../vscode';

export interface IVSCodeExtensionTerminalOptions {
  name: string;
  pty: IVSCodePseudoterminal;
}
