import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '../views/Home.vue'

import AuthLayout from '../layouts/AuthLayout.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'signin',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth.isAuthenticated) {
      return next({
        name: 'SignIn',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }

  next()
})

export default router
