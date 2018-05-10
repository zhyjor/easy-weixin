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
                this.isReady = true
                console.log('可以了', new Date().getTime(), this.isReady)
                resolve()
            })
            wx.error(function (err) {
                reject(err)
            })
        })
        return configPromise
    }

    wxMehodsCall (methods, config = {
        success: function () {
            console.log('成功')
        },
        cancel: function () {
            console.log(
                '取消'
            )
        }
    }) {
        if (this.isReady) {
            wx[methods](config)
        } else {
            console.log('-----------呜呜呜，还没授权-----------')
        }
    }
}

// const wxJsInit = (config) => {
//     let wxJsCore = new WxJsCore(config)
//     wxJsCore.jsSdkConfig()
//     wxJsCore.wxMehodsCall('getLocation', {
//         type: 'wgs84',
//         success: function (data) {
//             let latitude = data.latitude
//             let longitude = data.longitude
//             if (longitude != null && latitude != null) {
//                 console.log(longitude + ':' + latitude)
//                 callback && callback(longitude, latitude)
//             } else {
//                 alert('获取地理位置信息失败请重试')
//             }
//         },
//         fail: function (data) {
//             console.log('微信获取位置失败：' + JSON.stringify(data))
//         }
//     })
//
// }

