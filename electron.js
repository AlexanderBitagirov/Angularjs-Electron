const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
  });
  win.webContents.openDevTools()

  win.loadFile('./dist/index.html');
}


app.on('ready', createWindow);