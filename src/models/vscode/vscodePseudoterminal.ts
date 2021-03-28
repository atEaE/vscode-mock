import { IVSCodeEvent, IVSCodeTerminalDimensions } from '../vscode';

export interface IVSCodePseudoterminal {
  onDidWrite: IVSCodeEvent<string>;
  onDidOverrideDimensions?: IVSCodeEvent<IVSCodeTerminalDimensions | undefined>;
  onDidClose?: IVSCodeEvent<void | number>;
  open(initialDimensions: IVSCodeTerminalDimensions | undefined): void;
  close(): void;
  handleInput?(data: string): void;
  setDimensions?(dimensions: IVSCodeTerminalDimensions): void;
}