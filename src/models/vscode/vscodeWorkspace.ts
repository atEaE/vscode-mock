import { IVSCodeWorkspaceFolder } from './vscodeWorkspaceFolder';
import { IVSCodeWorkspaceConfiguration } from './vscodeWorkspaceConfiguration';
import { VSCodeConfigurationScope } from './vscodeConfigurationScope';


export interface IVSCodeWorkspace {
  workspaceFolders: readonly IVSCodeWorkspaceFolder[] | undefined;
  getConfiguration(section?: string | undefined, scope?: VSCodeConfigurationScope): IVSCodeWorkspaceConfiguration;
}