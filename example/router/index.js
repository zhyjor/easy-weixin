import Vue from 'vue'
import Router from 'vue-router'

import Splash from '../pages/splash.vue'
import Home from '../pages/home.vue'

import store from '../store/'
import {wxAuthInit} from '../../index'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/splash',
            name: 'splash',
            component: Splash,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            },
            children: []
        },
        {
            path: '*',
            redirect: '/splash'
        }
    ]
})

router.beforeEach((to, from, next) => {
    store.dispatch('getOpenId')
    if (to.meta.requiresAuth) {
        const hasOpenId = store.getters.hasOpenId
        if (hasOpenId) {
            console.log('hasOpenId:' + hasOpenId)
            next()
        } else {
            wxAuthInit({
                appid: 'wx9e3db1dfe14a2868', // 您的微信appid
                responseType: 'code',  // 返回类型，请填写code
                scope: 'snsapi_userinfo', // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
                next: next,
                getCodeCallback(code, goNext) {
                    console.log(code)
                    store.dispatch('requestOpenId', code)
                    goNext()
                    // alert(code)
                }
            })
        }
    } else {
        next()
    }
})

export default router
