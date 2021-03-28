import { IVSCodeUri } from '../vscode';

export interface IVSCodeTerminalOptions {
  name?: string;
  shellPath?: string;
  shellArgs?: string[] | string;
  cwd?: string | IVSCodeUri;
  env?: { [key: string]: string | null | undefined };
  strictEnv?: boolean;
  hideFromUser?: boolean;
}