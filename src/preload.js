/*
 * @Author: NyanCatda
 * @Date: 2022-11-26 02:35:18
 * @LastEditTime: 2022-11-26 03:11:38
 * @LastEditors: NyanCatda
 * @Description: 
 * @FilePath: \vue-electron\src\preload.js
 */
const { contextBridge } = require('electron')
const fs = require('fs')

// 导出Node.js的模块
contextBridge.exposeInMainWorld("nodejs", {
    fs,
})