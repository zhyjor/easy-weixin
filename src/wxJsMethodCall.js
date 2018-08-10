import wx from 'weixin-jsapi'

const wxJsMethodsCall = (methods, config) => {
  return new Promise(function(resolve, reject) {
    wx[methods]({
      config,
      success: function(data) {
        console.log(data)
        resolve(data)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}

export default wxJsMethodsCall
