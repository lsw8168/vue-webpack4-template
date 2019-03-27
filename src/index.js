import Vue from 'vue'
import router from './router'
import App from './App'
import axios from 'axios'

import 'assets/css/app.css'

Vue.prototype.$http = axios

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
