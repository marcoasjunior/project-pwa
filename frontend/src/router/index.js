import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Principal.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:'/', redirect: '/Main'
    },

    { 
      path: '/Public', 
      component: () => import( '../views/viewsPublic.vue'),

      children: [
        {
          path: '/login',
          component: () => import( '../views/public/Login.vue'),
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/Signup',
          component: () => import( '../views/public/Signup.vue'),
        },
        {
          path: '/Main',
          component: () => import( '../views/public/Main.vue'),
        },
        {
          path: '/Loading',
          component: () => import( '../views/public/Loading.vue'),
        },
        {
          path: '/SucessLogin',
          component: () => import( '../views/public/SucessLogin.vue'),
        },
        
   
    ]
  },

  { 
    path: '/Private', 
    component: () => import( '../views/viewsPrivate.vue'),

    children: [
      {
        path: '/Feed',
        component: () => import( '../views/private/Feed.vue'),
      },
      {
        path: '/Options',
        component: () => import( '../views/private/Options.vue'),
      },
      {
        path: '/CreateEvent',
        component: () => import( '../views/private/CreateEvent.vue'),
      },
  ]
},





  // {
  //   path: '/Principal',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/Login',
  //   name: 'login',
  //   component: () => import( '../views/Login.vue')
  // },
  // {
  //   path: '/Feed',
  //   name: 'feed',
  //   component: () => import( '../views/Feed.vue')
  // },
  // {
  //   path: '/Signup',
  //   name: 'signup',
  //   component: () => import( '../views/Signup.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // }



]

const router = new VueRouter({
  routes
})

export default router
