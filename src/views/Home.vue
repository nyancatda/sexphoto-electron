<!--
 * @Author: NyanCatda
 * @Date: 2022-11-26 01:29:30
 * @LastEditTime: 2022-11-26 03:39:54
 * @LastEditors: NyanCatda
 * @Description: 首页
 * @FilePath: \vue-electron\src\views\Home.vue
-->
<template>
    <center>
        <img height="640" :src="img" />
    </center>
</template>

<script>
import { ref } from 'vue'
import axios from '@/plugins/axios'

export default {
    name: 'Home',
    components: {},
    setup() {
        const img = ref('')

        axios.get('/')
            .then((response) => {
                img.value = response.data.data[0].url
            })
            .catch((error) => {
                console.log(error);
            });

        // 读取本地文件
        // var data = nodejs.fs.readFileSync('README.md');
        // console.log(Uint8ArrayToString(data));

        return {
            img,
        }
    },
}
</script>

<style>

</style>