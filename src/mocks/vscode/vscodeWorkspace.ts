import {
  IVSCodeWorkspace,
  IVSCodeWorkspaceConfiguration,
  IVSCodeWorkspaceFolder,
  VSCodeConfigurationScope
} from '../../models';
import { MockVSCodeWorkspaceConfiguration } from '../vscode';

/**
 * genereate no opened workspace.
 */
export function generateNoOpenWorkspace(): IVSCodeWorkspace {
  return new MockVSCodeWorkspace(undefined, undefined);
}

/**
 * Mock VSCodeWorkspace (implements IVSCodeWorkspace)
 */
export class MockVSCodeWorkspace implements IVSCodeWorkspace {
  private _configurationRoot: Map<string, any>;
  constructor(private _workspaceFolders: IVSCodeWorkspaceFolder[] | undefined, _configRoot: Map<string, any> | undefined) {
    this._configurationRoot = _configRoot ? _configRoot : new Map<string, any>();
  }

  public get workspaceFolders(): readonly IVSCodeWorkspaceFolder[] | undefined {
    return this._workspaceFolders;
  }

  public getConfiguration(section?: string, _?: VSCodeConfigurationScope): IVSCodeWorkspaceConfiguration {
    if (!section) {
      return new MockVSCodeWorkspaceConfiguration(this._configurationRoot);
    }
    var config = this._configurationRoot.get(section);
    return new MockVSCodeWorkspaceConfiguration(config);
  }

  // Mock only
  public setConfigurationSection(section: string, configuration: Map<string, any>): void {
    this._configurationRoot.set(section, configuration);
  }
}