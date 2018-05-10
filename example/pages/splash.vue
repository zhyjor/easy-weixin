<template>
    <div class='splash'>

        <img src='../static/logo.jpeg' alt="">
        <div class='desc'>
            <p>splash页面</p>
            <p>
                这个页面是已经经过授权的，因为获取的openId存储在sessionStroage
            </p>
        </div>
        <button class='login' v-on:click='goMain'>登录</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'splash',
        data () {
            return {}
        },
        methods: {
            goMain () {
                this.$router.replace({name: 'home'})
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
