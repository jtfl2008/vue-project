import { get } from '../axiosConfig'
export default {
  // 用户登录状态
  login() {
    return get('/login')
  }
}
