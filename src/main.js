import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/css/resetElement.css'
import router from './router'
import store from './store'
import api from './api'
import { autoImportComponents } from '@/utils/autoImport'
autoImportComponents(Vue)
Vue.prototype.$api = api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局组件大小设置
Vue.use(ElementUI, { size: 'mini' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
