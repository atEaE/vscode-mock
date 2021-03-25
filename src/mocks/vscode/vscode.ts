import * as models from '../../models';

/**
 * Mock VSCode (implements IVSCode)
 */
export class MockVSCode implements models.IVSCode {
  /**
   * get version information.
   */
  public get version(): string {
    return '1.0.0';
  }
}