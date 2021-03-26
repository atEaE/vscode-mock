import * as models from '../../models';

/**
 * Mock VSCodeWorkspaceConfiguration (implements IVSCodeWorkspaceConfiguration)
 */
export class MockVSCodeWorkspaceConfiguration implements models.IVSCodeWorkspaceConfiguration {
  private _config: Map<string, any>;
  constructor(config: Map<string, any> | undefined) {
    this._config = config ? config : new Map<string, any>();
  }

  public get<T>(section: string): T | undefined;
  public get<T>(section: string, defaultValue: T): T;
  public get(section: any, defaultValue?: any) {
    var config = this._config.get(section);
    if (config) {
      return config;
    }
    return defaultValue ? defaultValue : undefined;
  }

  public has(section: string): boolean {
    return this._config.has(section);
  }
}