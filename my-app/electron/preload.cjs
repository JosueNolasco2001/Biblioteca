const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Exponer funciones seguras aquí
});