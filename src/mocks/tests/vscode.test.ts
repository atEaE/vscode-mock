import { assert } from 'chai';

// target modules.
import * as mocks from '../vscode';

describe('MockVSCode Tests', () => {
  describe('property check', () => {
    it('get version', () => {
      // arrange
      const mock = new mocks.MockVSCode(new mocks.MockVSCodeCommands(), mocks.generateNoOpenWorkspace());

      // act & assert
      assert.equal(mock.version, '1.0.0');
    });
  });
});