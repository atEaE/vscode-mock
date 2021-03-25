import { assert } from 'chai';
import { MockVSCode } from '../vscode';

describe('MockVSCode Tests', () => {
  describe('property version', () => {
    it('get version', () => {
      // arrange
      const mock = new MockVSCode();

      // act & assert
      assert.equal(mock.version, '1.0.0');
    });
  });
});