const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveFile: (data, suggestedFilename) => ipcRenderer.invoke('save-file', { data, suggestedFilename }),
  openFile: () => ipcRenderer.invoke('open-file'),
  showToast: (message, type) => {
    ipcRenderer.send('show-toast', { message, type });
  }
});