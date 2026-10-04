// INTERPLAY signups: paste into Extensions → Apps Script on your Google Sheet, then deploy as a web app.
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName('Signups') || book.insertSheet('Signups');
    if (sheet.getLastRow() === 0) sheet.appendRow(['Time', 'Email']);
    const email = String((e.parameter && e.parameter.email) || '').trim().toLowerCase().slice(0, 254);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return ContentService.createTextOutput('invalid');
    const seen = sheet.getLastRow() > 1 ? sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues().flat() : [];
    if (!seen.includes(email)) sheet.appendRow([new Date(), email]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
