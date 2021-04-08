import * as vscode from 'vscode';
import parsesAndIterator from './iterator/parse';
import IIterator from './iterator/impl_iterator';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "increase-something" is now active!');

	let disposable = vscode.commands.registerCommand('increase-something.main', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		// Get the start of the increase sequence from the input box.
		// 通过输入框, 获取到增长序列的起点.
		let start = await vscode.window.showInputBox({
			value: '0',
		});
		if (!start) {
			return;
		}

		// Parses the start to determine the data type and returns an iterator
		// 解析输入的数据, 确定它的类型, 并返回迭代器.
		const iterator: IIterator = parsesAndIterator(start);
		if (!iterator) {
			return;
		}

		const selections = editor.selections;
		editor.edit(
			(builder: vscode.TextEditorEdit) => {
				selections.forEach(
					selection => {
						builder.replace(selection, iterator.next());
					});
			});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
