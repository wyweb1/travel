import Vue from 'vue'
import App from './App'
import router from './router'
// res.css公共样式引入
import './assets/styles/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
