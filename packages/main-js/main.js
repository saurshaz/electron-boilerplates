const { BrowserWindow, ipcRenderer } = require('electron')

let mainWindow;
module.exports.mainWindow = mainWindow;

const messaging = require('./messaging')(ipcRenderer);
module.exports.io = messaging.io;

module.exports.createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // Load the html of the app.
    const url = process.env.APP_RENDER_URL;
    const appUrl = url || `file://${__dirname}/renderer.html`;
    console.log(`[main] Loading ${appUrl}`);
    mainWindow.loadURL(appUrl);

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
    
    return mainWindow;
}