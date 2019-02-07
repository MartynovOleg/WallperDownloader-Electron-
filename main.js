const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

let create_Window = function (){
win = new BrowserWindow({width:800, height: 600, icon: __dirname + 'img/Wallper_Downloader.png'});

win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'), 
    protocol: 'file',
    slashes: true
}));

win.webContents.openDevTools();

win.on('closed', () => {
    win = null;
});

};

app.on('ready', create_Window);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
      }
});
