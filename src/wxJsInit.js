import WxJsCore from './utils/wxJsCore'

const wxJsInit = (config) => {
  let wxJsCore = new WxJsCore(config)
  return new Promise(function(resolve, reject) {
    wxJsCore.jsSdkConfig().then(() => {
        console.log('wxJsSdk授权成功')
        resolve()
      }
      , (err) => {
        console.log('wxJsSdk授权失败：', err)
        reject(err)
      })
  })
}
export default wxJsInit
