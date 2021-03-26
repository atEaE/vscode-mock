import * as vscode from 'vscode';
import { IVSCodeWorkspace } from './vscodeWorkspace';
export interface IVSCode {
  version: string;
  workspace: IVSCodeWorkspace;
}

vscode.Uri;