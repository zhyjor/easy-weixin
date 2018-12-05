<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {wxJsInit} from '../src/wxJsInit'

export default {
  name: 'app',
  mounted() {
    (function() {
      if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize()
      } else {
        if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", handleFontSize, false)
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", handleFontSize)
          document.attachEvent("onWeixinJSBridgeReady", handleFontSize)
        }
      }

      function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {
          'fontSize': 0
        })
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
          WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': 0
          })
        })
      }
    })()
  }
//        mounted: function () {
//            let url = window.location.href.split('#')[0]
//            let jsInit = new wxJsInit({
//                appId: 'wx9e3db1dfe14a2868',
//                timestamp: '1527558681',
//                nonceStr: '788ff6bf75e0422e',
//                signature: 'beaf3a7eb9aa37146261b0dc78230c8d21cc5690',
//            })
//
//            jsInit.callWxMethods('getLocation', {
//                type: 'wgs84'
//            }).then(function (data) {
//                let latitude = data.latitude
//                let longitude = data.longitude
//                if (longitude != null && latitude != null) {
//                    console.log('位置信息:', longitude + ':' + latitude)
//                    // callback && callback(longitude, latitude)
//                } else {
//                    console.log('获取地理位置信息失败请重试')
//                }
//            }).catch((err) => {
//                console.log(err)
//            })
//
//        }
}
</script>

<style>
  #app {
    font-family: 'arial', Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f3f5f7;
    height: 100%;
  }
</style>
