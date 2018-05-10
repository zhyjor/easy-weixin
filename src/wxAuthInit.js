/**
 * ------------------------------------------------------------------
 * 微信授权主入口文件
 * ------------------------------------------------------------------
 */

import WeChatAuth from './utils/wxAuthCore'
import url from 'url'
import querystring from 'querystring'

const wxAuthInit = (options) => {
  let weChatAuth = new WeChatAuth(options)
  let next = options.next

  function urlCodeQueryFilter (code) {
    if (code) {
      weChatAuth.setAuthCode(code)
      weChatAuth.removeUrlCodeQuery()
    }
  }

  function checkRouterAuth (next) {
    let authCode = weChatAuth.getAuthCode()
    if (!authCode && !weChatAuth.getAccessToken()) {
      weChatAuth.openAuthPage(encodeURIComponent(window.location.href))
      return false
    } else if (authCode && !weChatAuth.getAccessToken()) {
      weChatAuth.getCodeCallback(next)
      return false
    }
    return true
  }

  function beforeEach (next) {
    let query = querystring.parse(url.parse(window.location.href).query)
    let code = query.code
    urlCodeQueryFilter(code)
    if (!code && !checkRouterAuth(next)) {
      return false
    }
    next()
  }

  beforeEach(next)
}

export default wxAuthInit
