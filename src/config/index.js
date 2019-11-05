const BASEURL = process.env.VUE_APP_EVN === 'prod' ? 'prod' : 'test'
export default {
  LOGINURL: process.env.VUE_APP_LOGIN_URL,
  BASEURL: BASEURL
}
