import WxJsCore from './utils/wxJsCore'

const wxJsInits = (config) => {
    let wxJsCore = new WxJsCore(config)
    wxJsCore.jsSdkConfig().then(function () {
        wxJsCore.wxMehodsCall('getLocation', {
            type: 'wgs84',
            success: function (data) {
                let latitude = data.latitude
                let longitude = data.longitude
                if (longitude != null && latitude != null) {
                    console.log(longitude + ':' + latitude)
                    // callback && callback(longitude, latitude)
                } else {
                    console.log('获取地理位置信息失败请重试')
                }
            },
            fail: function (data) {
                console.log('微信获取位置失败：' + JSON.stringify(data))
            }
        })
    })
}
export default wxJsInits
