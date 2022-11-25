'use strict'

import { app, protocol, BrowserWindow, Menu, MenuItem } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // 创建窗口
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      webSecurity: false, // 关闭同源策略(Warning)
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, '/preload.js'),
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 如果是开发环境，加载开发服务器URL
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // 如果是开发环境，打开开发者工具
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // 如果是生产环境，加载打包后的index.html
    win.loadURL('app://./index.html')
  }
}

// 定义菜单
const menu = new Menu()
menu.append(new MenuItem({
  label: '菜单',
  submenu: [
    {
      label: 'Open DevTools',
      role: 'toggledevtools',
      accelerator: 'F12',
      click: () => {
        BrowserWindow.getFocusedWindow().webContents.openDevTools()
      }
    }
  ]
}))

Menu.setApplicationMenu(menu)

// 所有窗口关闭时退出应用程序 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 如果没有窗口打开则打开一个窗口 (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // 安装 Vue 开发者工具
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
