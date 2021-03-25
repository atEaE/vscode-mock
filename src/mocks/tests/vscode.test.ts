import { assert } from 'chai';

// target modules.
import { MockVSCode } from '../vscode';

describe('MockVSCode Tests', () => {
  describe('property check', () => {
    it('get version', () => {
      // arrange
      const mock = new MockVSCode();

      // act & assert
      assert.equal(mock.version, '1.0.0');
    });
  });
});