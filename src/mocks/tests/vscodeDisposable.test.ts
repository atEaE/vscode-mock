// target modules
import { IVSCodeDisposable } from '../../models';
import { MockVSCodeDisposable } from '../vscode';

describe('MockVSCodeDisposable Tests', () => {
  describe('type check', () => {
    it('implements testing', () => {
      // act & assert
      const mock: IVSCodeDisposable = new MockVSCodeDisposable(() => { });
    });
  });
});