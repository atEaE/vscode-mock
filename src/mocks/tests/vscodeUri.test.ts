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
    const urlMock = new MockVSCodeUri('http', 'www.msft.com', '/some/path', 'query', 'fragment');

    // e.g. file://server/c$/folder/file.txt
    const fileMock = new MockVSCodeUri('file', 'server', '/c$/folder/file.txt', 'file.txt', '');

    it('get scheme', () => {
      // act & assert
      assert.equal(urlMock.scheme, 'http');
      assert.equal(fileMock.scheme, 'file');
    });
    it('get authority', () => {
      // act & assert
      assert.equal(urlMock.authority, 'www.msft.com');
      assert.equal(fileMock.authority, 'server');
    });
    it('get path', () => {
      // act & assert
      assert.equal(urlMock.path, '/some/path');
      assert.equal(fileMock.path, '/c$/folder/file.txt');
    });
    it('get query', () => {
      // act & assert
      assert.equal(urlMock.query, 'query');
      assert.equal(fileMock.query, 'file.txt');
    });
    it('get fragment', () => {
      // act & assert
      assert.equal(urlMock.fragment, 'fragment');
      assert.equal(fileMock.fragment, '');
    });
    it('get fsPath', () => {
      // act & assert
      assert.equal(urlMock.fsPath, '/some/path');
      assert.equal(fileMock.fsPath, '/c$/folder/file.txt');
    });
  });

  describe('function with check', () => {
    // e.g. http://www.msft.com/some/path?query#fragment
    const mock = new MockVSCodeUri('http', 'www.msft.com', '/some/path', 'query', 'fragment');

    it('change values', () => {
      // act
      var got = mock.with({
        scheme: 'https',
        authority: 'www.msft.co.jp',
        path: '/any/path',
        query: 'query-other',
        fragment: 'fragment-other'
      });

      // assert
      assert.equal(got.scheme, 'https');
      assert.equal(got.authority, 'www.msft.co.jp');
      assert.equal(got.path, '/any/path');
      assert.equal(got.query, 'query-other');
      assert.equal(got.fragment, 'fragment-other');
    });
  });
});