// target modules.
import { IVSCodeUri, IVSCodeWorkspaceFolder } from '../../models';
import { MockVSCodeUri, MockVSCodeWorkspaceFolder } from '../vscode';

const _empty = '';

describe('MockVSCodeWorkspaceFolder Tests', () => {
  describe('type check', () => {
    it('implements testing', () => {
      // act & assert
      var uri: IVSCodeUri = new MockVSCodeUri(_empty, _empty, _empty, _empty, _empty);
      const mock: IVSCodeWorkspaceFolder = new MockVSCodeWorkspaceFolder(uri, 0);
    });
  });
});