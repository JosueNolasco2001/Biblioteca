const { app, BrowserWindow } = require('electron');

const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
      fullscreen: true, // Activa pantalla completa
    webPreferences: {
      preload: path.join(__dirname, './preload.cjs'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  win.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173' // URL de Vite durante desarrollo
      : `file://${path.join(__dirname, '../dist/index.html')}` // Archivo empaquetado
  );
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
