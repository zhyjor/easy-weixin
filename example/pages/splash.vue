<template>
    <div class='splash'>

        <img src='../static/logo.jpeg' alt="">
        <div class='desc'>
            <p>splash页面</p>
            <p>
                这个页面是已经经过授权的，因为获取的openId存储在sessionStroage
            </p>

            <p>
                经度{{longitude}}
            </p>
        </div>
        <button class='login' v-on:click='goMain'>登录</button>
    </div>
</template>

<script type="text/ecmascript-6">
    // import wxJsInit from '../../src/wxJsInit'

    export default {
        name: 'splash',
        data () {
            let longitude = ''
            let latitude = ''
            return {
                longitude: longitude,
                latitude: latitude
            }
        },
        mounted: function () {
            let _self = this
            let url = window.location.href.split('#')[0]
//            wxJsInit({
//                appId: 'wx9e3db1dfe14a2868',
//                timestamp: '1525951578',
//                nonceStr: 'b1a76bb45d8441ba',
//                signature: 'e4c4a004f3039172e8b70f652b8ea824a7f3ec35',
//            })
//             let jsInit = new wxJsInit({
//                 appId: 'wx9e3db1dfe14a2868',
//                 timestamp: '1531893075',
//                 nonceStr: '51a518dc46d64414',
//                 signature: 'e23dacd57462be096834cbda924fbfeb9b09277d',
//             })
//
//             jsInit.callWxMethods('getLocation', {
//                 type: 'wgs84'
//             }).then(function (data) {
//                 let latitude = data.latitude
//                 let longitude = data.longitude
//                 if (longitude != null && latitude != null) {
//                     _self.longitude = longitude
//                     _self.latitude = latitude
//                     console.log('位置信息:', longitude + ':' + latitude)
//                     // callback && callback(longitude, latitude)
//                 } else {
//                     console.log('获取地理位置信息失败请重试')
//                 }
//             })

        },
        methods: {
            goMain () {
                this.$router.replace({name: 'home'})
            },
        },
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
