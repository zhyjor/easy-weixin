# easy-weixin

对于jssdk的调用，可以在初始化的时候封装一层promise,在方法调用的时候封装一层promise,这样可以将配置和调用解耦，通过then控制时序。

```
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
```

```
getLocation() {
  wxJsInit({
    appId: 'wx9e3db1dfe14a2868',
    timestamp: '1533950225',
    nonceStr: '104239041ba34ab2',
    signature: '656f4118411b8728ad3ad1bef3e286d26a5e198d',
  }).then((res) => {
      return wxJsMethodCall('getLocation', {
        type: 'wgs84'
      })
    }
  ).then(function(data) {
    console.log(data)
    let latitude = data.latitude
    let longitude = data.longitude
    if (longitude != null && latitude != null) {
      console.log('位置信息:', longitude + ':' + latitude)
      // callback && callback(longitude, latitude)
    } else {
      console.log('获取地理位置信息失败请重试')
    }
  }).catch(e => {
    console.log(e)
  })
}
```

