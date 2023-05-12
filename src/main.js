const { app, BrowserWindow } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.webContents.on('did-get-response-details', (event, status, newURL, originalURL, httpResponseCode, requestMethod, referrer, headers) => {
    if (headers['content-security-policy']) {
      headers['content-security-policy'] += " default-src 'self' https://cdn.jsdelivr.net;";
    } else {
      headers['content-security-policy'] = "default-src 'self' https://cdn.jsdelivr.net;";
    }

    win.webContents.session.webRequest.onCompleted({ id: event.id, responseHeaders: headers });
  });

  win.loadFile('src/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
