import { IVSCodeTerminalOptions, IVSCodeExtensionTerminalOptions, IVSCodeTerminalExitStatus } from '../vscode';

export interface IVSCodeTerminal {
  readonly name: string;
  readonly processId: Thenable<number | undefined>;
  readonly creationOptions: Readonly<IVSCodeTerminalOptions | IVSCodeExtensionTerminalOptions>;
  readonly exitStatus: IVSCodeTerminalExitStatus | undefined;
  sendText(text: string, addNewLine?: boolean): void;
  show(preserveFocus?: boolean): void;
  hide(): void;
  dispose(): void;
}