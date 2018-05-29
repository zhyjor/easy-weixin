import WxJsCore from './utils/wxJsCore'

class wxJsInit {
    constructor (config) {
        this.config = config
        this.wxJsCore = new WxJsCore(config)
    }

    callWxMethods (methodsName, methodsConfig) {
        var _self = this

        const callMethodPromise = new Promise(function (resolve, reject) {
            _self.wxJsCore.jsSdkConfig().then(() => {
                    console.log('wx授权成功')
                    return _self.wxJsCore.wxMethodsCall(methodsName, methodsConfig)
                }
                , (err) => {
                    console.log('wx授权失败0：', err)
                    reject(err)
                })
        })

        return callMethodPromise
    }
}

export default wxJsInit
