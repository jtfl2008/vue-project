import config from '@/config'
export const loginOut = addrUrl => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('functions')
  var toUrl = ''
  if (addrUrl == 1) {
    //跳转只携带host信息(退出等操作)
    toUrl = window.location.protocol + '//' + window.location.host
  } else {
    toUrl = window.location.href
  }
  window.location.href = config.LOGINURL + '?toUrl=' + encodeURIComponent(toUrl)
}
