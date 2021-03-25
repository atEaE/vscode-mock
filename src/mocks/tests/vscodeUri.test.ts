import { assert } from 'chai';

// target modules.
import { IVSCodeUri } from '../../models';
import { MockVSCodeUri } from '../vscode';

const _empty = '';

describe('MockVSCodeUri Tests', () => {
  describe('implements testing', () => {
    // act & assert
    var mock: IVSCodeUri = new MockVSCodeUri(_empty, _empty, _empty, _empty, _empty);
  });

  describe('property check', () => {
    // e.g. http://www.msft.com/some/path?query#fragment
    const mock = new MockVSCodeUri('http', 'www.msft.com', '/some/path', 'query', 'fragment');

    it('get scheme', () => {
      // act & assert
      assert.equal(mock.scheme, 'http');
    });
    it('get authority', () => {
      // act & assert
      assert.equal(mock.authority, 'www.msft.com');
    });
    it('get path', () => {
      // act & assert
      assert.equal(mock.path, '/some/path');
    });
    it('get query', () => {
      // act & assert
      assert.equal(mock.query, 'query');
    });
    it('get fragment', () => {
      // act & assert
      assert.equal(mock.fragment, 'fragment');
    });
    it('get fsPath', () => {
      // act & assert
      assert.equal(mock.fsPath, '/some/path');
    });
  });
});