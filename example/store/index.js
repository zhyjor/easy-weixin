import Vue from 'vue'
import Vuex from 'vuex'

export const HAS_OPENID = 'HAS_OPENID' // 已经登录状态HAS_OPENID
export const SAVE_OPENID = 'SAVE_OPENID' // 保存OPENID
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        openId: {},
        hasOpenId: false,
        logout: true
    },
    getters: {
        hasOpenId: state => {
            return state.hasOpenId
        }
    },
    mutations: {
        //  hasOpenId and saveopenId
        [SAVE_OPENID] (state, openId) {
            //  save in state
            state.openId = openId
            state.hasOpenId = true
            state.logout = false
            //  save in localStorage
            sessionStorage.setItem('OpenId', JSON.stringify(openId))
        },
        //  hasOpenId and saveopenId
        [HAS_OPENID] (state, openId) {
            //  save in state
            state.openId = openId
            state.hasOpenId = true
            state.logout = false
        }
    },
    actions: {
        //   code : oauth2 授权后返回的code
        requestOpenId: ({commit}, code) => {
            // 这里需要通过code去换取openid，这一步需要服务器去做
            let openId = `getOpenId from network:${code}`
            commit(SAVE_OPENID, openId)
        },
        getOpenId: ({commit}) => {
            const openId = sessionStorage.getItem('OpenId')
            console.log('openId', openId)
            if (openId) {
                commit(HAS_OPENID, openId)
            }
        }
    }
})
