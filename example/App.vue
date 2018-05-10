<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {wxJsInit} from '../src/wxJsInit'
    import wxJsInits from '../src/jsInit'

    export default {
        name: 'app',
        mounted: function () {
            let url = window.location.href.split('#')[0]
//            wxJsInit({
//                appId: 'wx9e3db1dfe14a2868',
//                timestamp: '1525951578',
//                nonceStr: 'b1a76bb45d8441ba',
//                signature: 'e4c4a004f3039172e8b70f652b8ea824a7f3ec35',
//            })
            wxJsInits({
                appId: 'wx9e3db1dfe14a2868',
                timestamp: '1525951578',
                nonceStr: 'b1a76bb45d8441ba',
                signature: 'e4c4a004f3039172e8b70f652b8ea824a7f3ec35',
            })
        }
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
