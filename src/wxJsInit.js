import wx from 'weixin-jsapi'
// import store from '../store/'

export const wxJsInit = (config) => {
    console.log('开始配置', new Date().getTime())
    wx.config({
        debug: false,
        appId: config.appId,
        timestamp: config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
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

    let links = 'http://分享跳转地址'
    let linkUrl = 'http://微信以外的跳转地址/static/shareqq.html' // 微信以外的
    let title = '名字'
    let desc = '简介.'
    let imgUrl = '分享图标/sharelogo.png'
    wx.ready(function () {
        console.log('成功了吗', new Date().getTime())
        // store.dispatch('updateLocationByWX')
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // alert('分享到朋友圈成功')
                console.log({
                    message: '成功分享到朋友圈'
                })
            },
            cancel: function () {
                // alert('分享失败,您取消了分享!')
                console.log({
                    message: '分享失败,您取消了分享!'
                })
            }
        })
        // 微信分享菜单测试
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: links, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // alert('成功分享给朋友')
                console.log({
                    message: '成功分享给朋友'
                })
            },
            cancel: function () {
                // alert('分享失败,您取消了分享!')
                console.log({
                    message: '分享失败,您取消了分享!'
                })
            }
        })

        wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // alert('成功分享给QQ')
                console.log({
                    message: '成功分享到QQ'
                })
            },
            cancel: function () {
                // alert('分享失败,您取消了分享!')
                console.log({
                    message: '分享失败,您取消了分享!'
                })
            }
        })
        wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // alert('成功分享给朋友')
                console.log({
                    message: '成功分享到腾讯微博'
                })
            },
            cancel: function () {
                // alert('分享失败,您取消了分享!')
                console.log({
                    message: '分享失败,您取消了分享!'
                })
            }
        })
        wx.onMenuShareQZone({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: linkUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // alert('成功分享给朋友')
                console.log({
                    message: '成功分享到QQ空间'
                })
            },
            cancel: function () {
                // alert('分享失败,您取消了分享!')
                console.log({
                    message: '分享失败,您取消了分享!'
                })
            }
        })
    })
    wx.error(function (err) {
        console.log(JSON.stringify(err))
    })
}

export const getLocation = (callback) => {
    wx.getLocation({
        type: 'wgs84',
        success: function (data) {
            let latitude = data.latitude
            let longitude = data.longitude
            if (longitude != null && latitude != null) {
                console.log(longitude + ':' + latitude)
                callback && callback(longitude, latitude)
            } else {
                alert('获取地理位置信息失败请重试')
            }
        },
        fail: function (data) {
            console.log('微信获取位置失败：' + JSON.stringify(data))
        }
    })
}
