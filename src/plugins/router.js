/*
 * @Author: NyanCatda
 * @Date: 2022-10-28 16:17:56
 * @LastEditTime: 2022-11-26 01:29:38
 * @LastEditors: NyanCatda
 * @Description: 路由组件
 * @FilePath: \vue-electron\src\plugins\router.js
 */
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

// 路由注册
const routes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                name: "home",
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: 'SexPhoto',
                },
            },
        ]
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 判断是否有标题
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'SexPhoto'
    }
    next()// 执行进入路由
})

export default router;