// target modules.
import { IVSCodeWorkspaceConfiguration } from '../../models';
import { MockVSCodeWorkspaceConfiguration } from '../vscode';

const _empty = '';

describe('MockVSCodeWorkspaceConfiguration Tests', () => {
  describe('type check', () => {
    it('implements testing', () => {
      // act & assert
      let inner = new Map<string, any>();
      const mock: IVSCodeWorkspaceConfiguration = new MockVSCodeWorkspaceConfiguration(inner);
    });
  });
});