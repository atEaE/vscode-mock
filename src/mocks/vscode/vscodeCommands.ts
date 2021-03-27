import * as models from '../../models';
import * as mocks from '../vscode';
import * as recorder from '../recorder';

/**
 * Mock VSCodeCommands (implements IVSCodeCommands)
 */
export class MockVSCodeCommands implements models.IVSCodeCommands {
  public static readonly RECORD_KEY__EXECUTE_COMMAND = 'executeCommand';
  public static readonly RECORD_KEY__REGISTER_COMMAND = 'registerCommand';

  private _recorder: recorder.TableRecorder;

  constructor(_recorder?: recorder.TableRecorder | undefined) {
    this._recorder = _recorder ? _recorder : new recorder.TableRecorder();

    this._recorder.createRecordTable<string>(
      MockVSCodeCommands.RECORD_KEY__EXECUTE_COMMAND,
    );
    this._recorder.createRecordTable<recorder.IRegisterCommandRecord>(
      MockVSCodeCommands.RECORD_KEY__REGISTER_COMMAND,
    );
  }

  public executeCommand<T>(command: string, ...rest: any[]): Thenable<T> {
    return new Promise((resolve, reject) => {/* allow empty function. */});
  }

  public registerCommand(
    command: string,
    callback: (...args: any[]) => any,
    thisArg?: any,
  ): models.IVSCodeDisposable {
    this._recorder
      .getRecord<recorder.IRegisterCommandRecord>(
        MockVSCodeCommands.RECORD_KEY__REGISTER_COMMAND,
      )
      .push({ command });
    return new mocks.MockVSCodeDisposable(() => {/* allow empty function. */});
  }
}
