import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension-testerrr.helloWorld', () => {
		if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
			vscode.window.showInformationMessage(`current folder name is: ${vscode.workspace.workspaceFolders[0].uri}`);
		}
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {}
