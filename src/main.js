/*
 * @Author: NyanCatda
 * @Date: 2022-11-26 00:50:18
 * @LastEditTime: 2022-11-26 01:48:28
 * @LastEditors: NyanCatda
 * @Description: 
 * @FilePath: \vue-electron\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js'

createApp(App)
    .use(router)
    .mount('#app')
