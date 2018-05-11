import WxJsCore from './utils/wxJsCore'

const wxJsInits = (config) => {
    let wxJsCore = new WxJsCore(config)
    wxJsCore.jsSdkConfig().then(function () {
        // return wxJsCore.wxMehodsCall('getLocation', {
        //     type: 'wgs84'
        // })
        return wxJsCore.wxMehodsCall('scanQRCode', {
            needResult: 1,
            scanType: ['qrCode', 'barCode']
        })
    }).then(function (data) {
        console.log(data.resultStr)
        // let latitude = data.latitude
        // let longitude = data.longitude
        // if (longitude != null && latitude != null) {
        //     console.log('位置信息:', longitude + ':' + latitude)
        //     // callback && callback(longitude, latitude)
        // } else {
        //     console.log('获取地理位置信息失败请重试')
        // }
    })
}
export default wxJsInits
