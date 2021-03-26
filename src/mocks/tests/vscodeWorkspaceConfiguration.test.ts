// target modules.
import { assert } from 'chai';
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

  describe('function has check', () => {
    // arrange
    let inner = new Map<string, any>();
    inner.set('key1', 'key1_get_ok');
    inner.set('key2', 'key2_get_ok');
    const mock = new MockVSCodeWorkspaceConfiguration(inner);

    it('has return true(exist key)', () => {
      assert.isTrue(mock.has('key1'));
      assert.isTrue(mock.has('key2'));
    });
    it('has return false(not exist key)', () => {
      assert.isFalse(mock.has('key3'));
      assert.isFalse(mock.has('key4'));
    });
  });
});