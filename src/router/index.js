import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import HomeView from '../views/HomeView'
import NotFoundView from '../views/NotFoundView'

import AuthLayout from '../layouts/AuthLayout'
import SignInView from '../views/SignInView'
import SignUpView from '../views/SignUpView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
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
        component: SignInView
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUpView
      },
      {
        path: '',
        component: NotFoundView
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFoundView
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
