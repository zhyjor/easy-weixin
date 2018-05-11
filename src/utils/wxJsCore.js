import wx from 'weixin-jsapi'
// import store from '../store/'

export default class WxJsCore {
    constructor (config) {
        this.isReady = false
        this.debug = false
        this.appId = config.appId
        this.timestamp = config.timestamp
        this.nonceStr = config.nonceStr
        this.signature = config.signature
    }

    jsSdkConfig () {
        var _self = this
        console.log('开始配置', new Date().getTime())
        const configPromise = new Promise(function (resolve, reject) {
            wx.config({
                debug: false,
                appId: _self.appId,
                timestamp: _self.timestamp,
                nonceStr: _self.nonceStr,
                signature: _self.signature,
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'translateVoice',
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'onVoicePlayEnd',
                    'pauseVoice',
                    'stopVoice',
                    'uploadVoice',
                    'downloadVoice',
                    'chooseImage',
                    'previewImage',
                    'uploadImage',
                    'downloadImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'closeWindow',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView',
                    'addCard',
                    'chooseCard',
                    'openCard']
            })

            wx.ready(function () {
                _self.isReady = true
                console.log('可以了', new Date().getTime(), _self.isReady)
                resolve()
            })
            wx.error(function (err) {
                reject(err)
            })
        })
        return configPromise
    }

    wxMehodsCall (methods, config) {
        const methodCallPromise = new Promise(function (resolve, reject) {
            wx[methods]({
                config,
                success: function (data) {
                    resolve(data)
                },
                fail: function (err) {
                    reject(err)
                }
            })
        })
        return methodCallPromise
    }
}
