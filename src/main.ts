import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './plugins/firebase'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

auth.onAuthStateChanged(user => {
  store.commit('setIsAuthenticated', user !== null)
  store.dispatch('bindBasket')

  app.$mount('#app')
})
