const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let startsWith = vscode.commands.registerCommand('selecta.startsWith', async function () {
		const input = await vscode.window.showInputBox({ placeHolder: 'Enter the value the line starts with' });

		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			if(!input){
				vscode.window.showErrorMessage('No input was found');
				return;
			}

			// Grab the text
			const document = editor.document;
			const documentText = document.getText();

			// Split up into lines
			const documentLines = documentText.split('\n');

			const startsRegex = new RegExp(`^${input}`, 'i');

			let lineNo = 0;
			const selections = [];
			for(const line of documentLines){
				// Regex test
				const match = startsRegex.test(line.trim());

				// If match, add selection to array
				if(match){
					selections.push(new vscode.Selection(lineNo, 0, lineNo, line.length));
				}
				
				lineNo++;
			}

			// Select selections
			editor.selections = selections;
		}
	});

	let endsWith = vscode.commands.registerCommand('selecta.endsWith', async function () {
		const input = await vscode.window.showInputBox({ placeHolder: 'Enter the value the line ends with' });

		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			if(!input){
				vscode.window.showErrorMessage('No input was found');
				return;
			}

			// Grab the text
			const document = editor.document;
			const documentText = document.getText();

			// Split up into lines
			const documentLines = documentText.split('\n');

			const startsRegex = new RegExp(`${input}$`, 'i');

			let lineNo = 0;
			const selections = [];
			for(const line of documentLines){
				// Regex test
				const match = startsRegex.test(line.trim());

				// If match, add selection to array
				if(match){
					selections.push(new vscode.Selection(lineNo, 0, lineNo, line.length));
				}
				
				lineNo++;
			}

			// Select selections
			editor.selections = selections;
		}
	});

	let contains = vscode.commands.registerCommand('selecta.contains', async function () {
		const input = await vscode.window.showInputBox({ placeHolder: 'Enter the value the line contains' });

		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			if(!input){
				vscode.window.showErrorMessage('No input was found');
				return;
			}

			// Grab the text
			const document = editor.document;
			const documentText = document.getText();

			// Split up into lines
			const documentLines = documentText.split('\n');

			const startsRegex = new RegExp(`${input}`, 'i');

			let lineNo = 0;
			const selections = [];
			for(const line of documentLines){
				// Regex test
				const match = startsRegex.test(line.trim());

				// If match, add selection to array
				if(match){
					selections.push(new vscode.Selection(lineNo, 0, lineNo, line.length));
				}
				
				lineNo++;
			}

			// Select selections
			editor.selections = selections;
		}
	});

	// Setup functions
	context.subscriptions.push(endsWith);
	context.subscriptions.push(startsWith);	
	context.subscriptions.push(contains);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
