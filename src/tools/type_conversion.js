/*
 * @Author: NyanCatda
 * @Date: 2022-11-26 03:07:44
 * @LastEditTime: 2022-11-26 03:09:52
 * @LastEditors: NyanCatda
 * @Description: 类型转换
 * @FilePath: \vue-electron\src\tools\type_conversion.js
 */
/**
 * @description: Uint8Array转String
 * @param {Uint8Array} Data 需要转换的数据 
 * @return {String} 转换后的数据
 */
function Uint8ArrayToString(Data) {
    var dataString = "";
    for (var i = 0; i < Data.length; i++) {
        dataString += String.fromCharCode(Data[i]);
    }

    return dataString
}

export { Uint8ArrayToString };
