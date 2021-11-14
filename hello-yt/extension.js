// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "hello-yt" is now active!');

  let disposable = vscode.commands.registerCommand(
    "hello-yt.helloWorld",

    function () {
      let editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showInformationMessage(`No editor open ${editor}`);
        return;
      }

      const text = editor.document.getText(editor.selection);
      vscode.window.showInformationMessage(`selcted ${text}`);
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from hello-yt!");
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
