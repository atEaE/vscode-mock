import * as vscode from 'vscode';
import { CompositionService } from './services/compositionService';
import * as models from './models';

export function activate(context: vscode.ExtensionContext) {
	const service = new CompositionService();
	const vsCodeManager = service.get(models.SYMBOLS.IVSCode);

	console.log('Congratulations, your extension "vscode-mock" is now active!');
	let disposable = vscode.commands.registerCommand('vscode-mock.helloWorld', () => {
		vscode.window.terminals[0].sendText('cd ~', true);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
