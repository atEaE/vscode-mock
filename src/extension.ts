import * as vscode from 'vscode';
import * as models from './models';
import * as mocks from './mocks';

export function activate(context: vscode.ExtensionContext) {
	const mock = new mocks.MockVSCodeUri('http', 'www.msft.com', '/some/path', 'query', 'fragment');
	var got = mock.with({
		scheme: 'https',
		authority: 'www.msft.co.jp',
		path: '/any/path',
		query: 'query-other',
		fragment: 'fragment-other'
	});
	console.log(got);

	console.log('Congratulations, your extension "vscode-mock" is now active!');
	let disposable = vscode.commands.registerCommand('vscode-mock.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-mock!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
