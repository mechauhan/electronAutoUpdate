const { app, BrowserWindow } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");
const { electron } = require("process");
let win;
log.info("Hello World");
const createWindow = () => {
  win = new BrowserWindow({ width: 500, height: 500 });
  win.loadFile(path.join(__dirname, "index.html"));
};

app.on("redy", () => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on("update-available", () => {
  log.info("update-available");
});

autoUpdater.on("checking-for-update", () => {
  log.info("checking-for-update");
});

autoUpdater.on("download progress", () => {
  log.info("download progress");
});

autoUpdater.on("update-downloaded", () => {
  log.info("update-downloaded");
});
