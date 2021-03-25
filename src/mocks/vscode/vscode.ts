import * as models from '../../models';

/**
 * Mock VSCode (implements IVSCode)
 */
export class MockVSCode implements models.IVSCode {
  /**
   * The version of the editor.
   */
  public get version(): string {
    return '1.0.0';
  }
}