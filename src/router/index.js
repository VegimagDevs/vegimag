import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

import HomeView from '../views/HomeView'
import NotFoundView from '../views/NotFoundView'
import CreateRecipeView from '../views/recipes/CreateRecipeView'
import SignInView from '../views/auth/SignInView'
import SignUpView from '../views/auth/SignUpView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/recipes/create',
        name: 'CreateRecipe',
        component: CreateRecipeView
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignInView
      },
      {
        path: 'sign-up',
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
