import wx from 'weixin-jsapi'

export default class WxJsCore {
    constructor (config, debug = false, methodList = [
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
        'openCard']) {
        this.isReady = false
        this.debug = debug
        this.appId = config.appId
        this.timestamp = config.timestamp
        this.nonceStr = config.nonceStr
        this.signature = config.signature
        this.methodList = methodList
        this.errCount = 0
        this.MAX_CONFING_RETRY_TIMES = 3
    }

    jsSdkConfig () {
        var _self = this
        console.log('***wx*** jsConfig is start at:', new Date().getTime())
        const configPromise = new Promise(function (resolve, reject) {
            if (_self.isReady) {
                resolve()
            } else {
                wx.config({
                    debug: _self.debug,
                    appId: _self.appId,
                    timestamp: _self.timestamp,
                    nonceStr: _self.nonceStr,
                    signature: _self.signature,
                    jsApiList: _self.methodList
                })

                wx.error(function (err) {
                    _self.isReady = false
                    console.log('***wx*** jsConfig is error at:', new Date().getTime())
                    reject(err)
                })

                wx.ready(function () {
                    console.log('***wx*** jsConfig is ready at:', new Date().getTime())
                    resolve()
                })
            }
        })
        return configPromise
    }

    wxMethodsCall (methods, config) {
        var _self = this
        const methodCallPromise = new Promise(function (resolve, reject) {
            wx[methods]({
                config,
                success: function (data) {
                    _self.isReady = true
                    resolve(data)
                },
                fail: function (err) {
                    _self.isReady = false
                    reject(err)
                }
            })
        })
        return methodCallPromise
    }
}
