import Vue from 'vue'
import Router from 'vue-router'
import cadastro from '../views/cadastro'
import options from '../views/options'
import home from '../views/home'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/cadastro',
        name: 'cadastro',
        component: cadastro
      },
      {
        path: '/options',
        name: 'options',
        component: options
      }
      
    ]
  })