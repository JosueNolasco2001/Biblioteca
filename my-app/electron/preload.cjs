// electron/preload.cjs
const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

// Exponer la función de carga de libros al frontend
contextBridge.exposeInMainWorld('electron', {
  loadBooksFile: (filePath) => {
    return new Promise((resolve, reject) => {
      const fullPath = path.join(__dirname, filePath);
      fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },
});
