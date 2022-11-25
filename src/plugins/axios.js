/*
 * @Author: NyanCatda
 * @Date: 2022-10-31 19:08:56
 * @LastEditTime: 2022-11-26 01:40:30
 * @LastEditors: NyanCatda
 * @Description: axios封装
 * @FilePath: \vue-electron\src\plugins\axios.js
 */
import axios from "axios";

// 定义默认API地址
axios.defaults.baseURL = "https://sex.nyan.xyz/api/v2/";
// 定义默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 定义默认超时时间
axios.defaults.timeout = 6000;

export default axios;