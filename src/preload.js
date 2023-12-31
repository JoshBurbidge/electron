// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  ipcRenderer.send('show-context-menu', { x: e.x, y: e.y });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'F12') {
    console.log(e);
    e.preventDefault();
    ipcRenderer.send('devtools');
  }
});

// listens for message, sent from main
ipcRenderer.on('context-menu-command', (e, command) => {
  console.log('ipcRenderer event');
  console.log(e);
  console.log(command);
});

// export "versions" as a global in renderer.js
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});
