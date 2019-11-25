import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '../src/assets/index.scss'
import axios from 'axios'
import moment from 'moment'
import VueParticles from 'vue-particles'




export {axios, moment}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
