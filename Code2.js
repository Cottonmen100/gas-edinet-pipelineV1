function myFunction() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet(); // GAS変数を使用

  const unusedVariable = 10; // ★この行に警告が出るはず★

  const shouldWarn = 123;
  const test = 1; // ← ← ← この行末にスペースを入れる
}
