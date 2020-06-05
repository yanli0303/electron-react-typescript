import {
  app,
  BrowserWindow,
} from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

app.allowRendererProcessReuse = true;
let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
  if (mainWindow) {
    return;
  }

  const win = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow = win;

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  // TODO: Use 'ready-to-show' event
  // * https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  win.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    mainWindow.webContents.openDevTools();
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.focus();
  });

  win.on('closed', () => {
    mainWindow?.destroy();
    mainWindow = null;
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (!mainWindow) {
    createWindow();
  }
});
