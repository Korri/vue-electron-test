const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({width: 800, height: 600});

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	// re-create the mainWindow if the dock icon is clicked in OS X and no other
	// windows were open
	if (mainWindow === null) {
		createWindow();
	}
});