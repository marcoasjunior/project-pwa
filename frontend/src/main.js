import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/boostrap/css/bootstrap.min.css'
import '../src/assets/index.scss'
import axios from 'axios'

export {axios}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
