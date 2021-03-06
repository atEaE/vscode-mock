import {
  IVSCodeWorkspace,
  IVSCodeWorkspaceConfiguration,
  IVSCodeWorkspaceFolder,
  VSCodeConfigurationScope,
} from '../../models';
import { MockVSCodeWorkspaceConfiguration } from '../vscode';

/**
 * Mock VSCodeWorkspace (implements IVSCodeWorkspace)
 */
export class MockVSCodeWorkspace implements IVSCodeWorkspace {
  private readonly _workspaceFolders: IVSCodeWorkspaceFolder[] | undefined;
  private readonly _configurationRoot: Map<string, any>;

  constructor(
    _workspaceFolders: IVSCodeWorkspaceFolder[] | undefined,
    configurationRoot: Map<string, any> | undefined,
    ) {
    this._workspaceFolders = _workspaceFolders;
    this._configurationRoot = configurationRoot ? configurationRoot : new Map<string, any>();
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

/**
 * genereate no opened workspace.
 */
 export function generateNoOpenWorkspace(): IVSCodeWorkspace {
  return new MockVSCodeWorkspace(undefined, undefined);
}
