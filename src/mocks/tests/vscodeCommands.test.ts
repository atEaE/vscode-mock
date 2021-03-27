// target modules
import { assert } from 'chai';
import { IVSCodeCommands } from '../../models';
import { IRegisterCommandRecord, TableRecorder } from '../recorder';
import { MockVSCodeCommands } from '../vscode';

describe('MockVSCodeCommands Tests', () => {
  describe('type check', () => {
    it('implements testing', () => {
      // act & assert
      const mock: IVSCodeCommands = new MockVSCodeCommands();
    });
  });

  describe('function registerCommand check', () => {
    it('register commands', () => {
      // arrage
      var recorder = new TableRecorder();
      const mock: IVSCodeCommands = new MockVSCodeCommands(recorder);

      // act
      mock.registerCommand('mockSampleCommands', () => {
        // allow empty function.
      });

      // assert
      var record = recorder.getRecord<IRegisterCommandRecord>(MockVSCodeCommands.RECORD_KEY__REGISTER_COMMAND);
      assert.equal(record.length, 1);
    });
  })
});
