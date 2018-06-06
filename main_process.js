const electron = require('electron');

const { app, BrowserWindow } = electron;

require('electron-reload')(__dirname, {
	electron,
});
// require('electron-reload')(__dirname, {
// 	electron: `${__dirname}/node_modules/.bin/electron`,
// });

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	mainWindow.toggleDevTools();
	mainWindow.loadURL(`file://${__dirname}/front/index.html`);
});
