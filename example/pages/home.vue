<template>
  <div class='splash'>

    <img src='../static/logo.jpeg' alt="">
    <div class='desc'>
      <p>home页面</p>
      <p>
        这个页面是已经经过授权的，因为获取的openId存储在sessionStroage
      </p>
    </div>
    <button class='login' v-on:click='goMain'>返回</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { wxJsInit, wxJsMethodCall } from '../../src/index'

export default {
  name: 'home',
  data() {
    return {}
  },
  mounted() {
    this.getLocation()
  },
  methods: {
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
    },

    goMain() {
      this.$router.push('splash')
    },
  }
}

</script>

<style scoped lang="css">
  .splash {
    font-family: sans-serif, 'Avenir', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border-radius: 50px;
  }

  .splash img {
    width: 125px;
    padding: 30px 0;
  }

  .desc {
    margin: 10px 20px;
    padding: 0;
    text-align: left
  }

  .desc p {
    font-size: 16px;
    line-height: 24px;
  }

  .login {
    position: relative;
    width: 50vw;
    height: 2.5rem;
    background-color: #00bdf5;
    color: #ffffff;
    border-radius: 25px;
    border-style: none;
    font-size: 18px;
  }
</style>
