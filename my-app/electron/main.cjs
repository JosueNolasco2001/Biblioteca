const { app, BrowserWindow, ipcMain } = require('electron'); // Agrega ipcMain
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true, // Activa pantalla completa
    icon: path.join(__dirname, '../dist/assets/Icon.png'),
    webPreferences: {
      preload: path.join(__dirname, './preload.cjs'), // Asegúrate de que esta ruta sea correcta
      nodeIntegration: true,
      contextIsolation: true, // Activa contextIsolation por seguridad
    },
  });

  win.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173' // URL de Vite durante desarrollo
      : `file://${path.join(__dirname, '../dist/index.html')}` // Archivo empaquetado
  );
}

// Manejo del evento 'exit-app' enviado desde el frontend
ipcMain.on('exit-app', () => {
  app.quit(); // Cierra la aplicación
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
